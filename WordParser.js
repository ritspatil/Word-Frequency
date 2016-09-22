var _ = require('underscore');
var Parser = function(){}

Parser.prototype.parse = function(text) {
	
	var lines = text.split("\n");
	
	var size =0;
	var words = [];
	var result = new Array();
	lines.forEach(function(word){

		var word = word.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()\r]/g,"");
		
		if(words[word] == undefined || words[word] < 0 ){
			words[word] = 0;
		}
		words[word] = words[word]+1;

	});

	for (w in words) if (words.hasOwnProperty(w)) {
		result.push({'word':w,'count':words[w]});
	}

	result.sort(function(a, b)
		{
			if(a.count == b.count){
				var x = a.word
				var y = b.word;
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			}
		return b.count - a.count; 			   
		});

		return result;
};

module.exports = Parser;