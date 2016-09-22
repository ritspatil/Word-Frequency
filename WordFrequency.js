var fs = require('fs');
var Parser = require('./WordParser');
var _ = require('underscore');

var result ;
fs.readFile('input.txt', function(err, logData){

	if(err){
		throw err;
	}
	var text = logData.toString();

	var parser = new Parser();	

	result = parser.parse(text);


	var fs = require('fs');
	var stream = fs.createWriteStream('output.txt', {flags: 'w'});

	console.log("check the output file for word frequency");
	var lines = " ";
	_.each(result,function(w){		
		var value = w;
		lines = value.count + " " + value.word + "\n";
		stream.write(lines);

	});

	stream.end("");
	
});




