Meteor.methods({
	getPaypalToken: function() {

		console.log("TOKEN");

		var auth, isTokenValid, token;
		isTokenValid = 0;
		token = PaypalTokens.findOne({
			timestamp: {
				$exists: true
			}
		}, {
			sort: {
				timestamp: -1
			}
		});

		if (token != null || !_.isUndefined(token)) {
			isTokenValid = Math.ceil((new Date().getTime() - token.timestamp) / 1000);
		}

		if (isTokenValid === 0 || isTokenValid > token.expires_in) {
			console.log("post");
			auth = paypalConfig['client_id'] + ':' + paypalConfig['client_secret'];
			token = EJSON.parse(HTTP.post('https://api.sandbox.paypal.com/v1/oauth2/token', {
				headers: {
					'Accept': 'application/json',
					'Accept-Language': 'en_US'
				},
				auth: auth,
				params: {
					'grant_type': 'client_credentials'
				}
			}).content);

			token['timestamp'] = new Date().getTime();
			PaypalTokens.insert(token);
		}

		return token;
	},
	
	createPaypalPayment: function(product) {
    var payment, res, token;
    token = Meteor.call('getPaypalToken');
    payment = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: 'http://localhost:3000/dashboard/payment/paypal/execute',
        cancel_url: 'http://localhost:3000/dashboard'
      },
      transactions: [
        {
          item_list: {
            'items': [
              {
                'name': product.name,
                'price': product.price,
                'currency': 'USD',
                'quantity': 1
              }
            ]
          },
          amount: {
            total: product.price,
            currency: 'USD'
          },
          description: product.description
        }
      ]
    };
    res = Meteor.http.post('https://api.sandbox.paypal.com/v1/payments/payment', {
      headers: {
        Authorization: 'Bearer ' + token.access_token,
        'Content-Type': 'application/json'
      },
      data: payment
    });
    res.data['userId'] = this.userId;
    PaypalPayments.insert(res.data);
    return res.data;
  },
  callBackendCode: function(params) {
    console.log('you sent up the parameters' + params);

    //here you will do all your paypal tracking. The params should have information regarding the customer.
  }
});