var data = require('./_women-men-age-turnout.json')
//read line by line from the geojson
     var fs = require('fs'),
     	 _ =require('lodash'),
      	util = require('util'),
    	lineReader = require('readline').createInterface({
      		input: require('fs').createReadStream('./_final.txt')
    	});
    	var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
		var log_stdout = process.stdout;
var i  = 0 ;
//append data to final geojson properties

    //rl.on('line', function(line, lineCount, byteCount) {
    lineReader.on('line', function (line) {

   	//get the city name,  first we put the get the city block
	   var city1 = line.match(/"NAME_EN":(.*?),/g)

      //we match the city name from the upper city block
      var reg = /"NAME_EN":\s"(.*?)",/;
      var city = city1[0].replace(reg, "$1");
      //console.log(city)
      //I will get the value of womenTurnout associated to city 
      //console.log(data[i].womenTurnout)
/*--------------------------------------------------------------*/
/*      var womenTurnout = data[i].sommeFemaleT ;
      var maleTurnout = data[i].sommeMaleT ;
      var pres = data[i].pres ;
      var leg = data[i].leg ;
      var _61_70 = data[i]._61_70 ;
      var _51_60 = data[i]._51_60 ;
      var _51_60 = data[i]._51_60 ;
      var _31_40 = data[i]._31_40 ;
      var _22_30 = data[i]._22_30 ;
      var plus70 = data[i].plus70 ;*/
/*----------------------------------------------------------*/
      //console.log(city)
      var turnoutPercentege = _.find(data, function(o) { return o.cityname == city; });
      //console.log(turnoutPercentege)
     /*---------------------------------------*/
      var womenTurnout =Math.round(turnoutPercentege.sommeFemaleT * 100) / 100;
      var maleTurnout =Math.round(turnoutPercentege.sommeMaleT * 100) / 100;
      var pres = Math.round(turnoutPercentege.pres * 100) / 100;
      var leg = Math.round(turnoutPercentege.leg * 100) / 100;
      var _61_70 = Math.round(turnoutPercentege._61_70 * 100) / 100;
      var _51_60 = Math.round(turnoutPercentege._51_60 * 100) / 100;
      var _51_60 = Math.round(turnoutPercentege._51_60 * 100) / 100;
      var _31_40 = Math.round(turnoutPercentege._31_40 * 100) / 100;
      var _22_30 = Math.round(turnoutPercentege._22_30 * 100) / 100;
      var plus70 = Math.round(turnoutPercentege.plus70 * 100) / 100;
      /*--------------------------------------*/
      //var  index= _.indexOf(mariagearr, city);
      //console.log(index)
      //append the new property to the geojson
      i++;
      var modif1=line.replace(/"CIRC_ID"/g,'"womenTurnout":'+womenTurnout+
      	',"pres":'+pres+
      	',"leg":'+leg+
      	',"_61_70":'+_61_70+
      	',"_51_60":'+_51_60+
      	',"_51_60":'+_51_60+
      	',"_31_40":'+_31_40+
      	',"_22_30":'+_22_30+
      	',"plus70":'+plus70+
      	',"maleTurnout":'+maleTurnout+
      	',"CIRC_ID"');
     console.log(modif1)
     console.log = function(modif1) { //
  		log_file.write(util.format(modif1) + '\n');
  		log_stdout.write(util.format(modif1) + '\n');
	};
      
  })
  .on('error', function(e) {
    console.log(e)
  });