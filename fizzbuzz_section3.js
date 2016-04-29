var count, fizzer, buzzer, and fizzbuzzer;
count = function(begin, end) {

	var output = buzzer(fizzer(begin));
	for (var i = begin; i <= end; i += 1) {
		output = output + " " + buzzer(fizzer(fizzbuzzer(i + 1)));
	}

	return output;
};

fizzer = function(num) {

	return 0 === num % 3 ? "fizz" : num;
};

buzzer = function(num) {

	return 0 === num % 5 ? "buzz" : num;
};

fizzbuzzer = function(num) {
	return 0 === num % 15 ? "fizzbuzz" : num;
};

module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer,
	fizzbuzzer: fizzbuzzer,
};
