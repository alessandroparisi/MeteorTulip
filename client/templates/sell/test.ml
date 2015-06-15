let l = [1;2;3]

let rec f l = match l with
	| [] -> []
	| x::y -> x::(f y)