var data = require('./_women.json')

var cityname = 'Tunis1'
var sommeFemaleT=0,sommeMaleT=0,plus70=0,pres=0, _61_70=0, _51_60=0, _41_50=0, _31_40=0, _22_30=0, _18_21=0, leg = 0;
var length = 0
var obj ={}
var tab = [];
for (i in data){
	if (data[i].circ == cityname){
		sommeFemaleT+=Number(data[i].women);
		sommeMaleT+=Number(data[i].men);
		pres+=Number(data[i].pres);
		leg+=Number(data[i].leg);
		_61_70+=Number(data[i]._61_70);
		_51_60+=Number(data[i]._51_60);
		_41_50+=Number(data[i]._41_50);
		_31_40+=Number(data[i]._31_40);
		_22_30+=Number(data[i]._22_30);
		_18_21+=Number(data[i]._18_21);
		plus70+=Number(data[i].plus70);

		length++;
	}else{
		/*when the city name changes*/
/*		sommeFemaleT = Math.round(sommeFemaleT* 100) / 100 ;
		sommeMaleT = Math.round(sommeMaleT* 100) / 100 ;
		pres = Math.round(pres* 100) / 100 ;
		leg = Math.round(leg* 100) / 100 ;
		_61_70 = Math.round(_61_70* 100) / 100 ;
		_51_60 = Math.round(_51_60* 100) / 100 ;
		_41_50 = Math.round(_41_50* 100) / 100 ;
		_31_40 = Math.round(_31_40* 100) / 100 ;
		_22_30 = Math.round(_22_30* 100) / 100 ;
		_18_21 = Math.round(_18_21* 100) / 100 ;
		plus70 = Math.round(plus70* 100) / 100 ;*/
		/*---------------------------------------------*/
		var _sommeFemaleT = sommeFemaleT/length ;
		var _sommeMaleT = sommeMaleT/length ;
		var _pres = pres/length ;
		var _leg = leg/length ;
		var __61_70 = _61_70/length ;
		var __51_60 = _51_60/length ;
		var __41_50 = _41_50/length ;
		var __31_40 = _31_40/length ;
		var __22_30 = _22_30/length ;
		var _plus70 = plus70/length ;
/*------------------------------------------*/
		/*create the obj*/
		obj.cityname = cityname;
/*----------------------------------------*/
		obj.sommeFemaleT = _sommeFemaleT;
		obj.sommeMaleT = _sommeMaleT;
		obj.pres = _pres;
		obj.leg = _leg;
		obj._61_70 = __61_70;
		obj._51_60 = __51_60;
		obj._41_50 = __41_50;
		obj._31_40 = __31_40;
		obj._22_30 = __22_30;
		obj.plus70 = _plus70;
/*----------------------------------------*/
		tab.push(obj); //append the obj to the array
		cityname = data[i].circ //init with the next cityname
		/*-----------------------------------*/
		/*//start a new percentege somme for the next city*/
		sommeFemaleT = Number(data[i].women);
		sommeMaleT = Number(data[i].men);
		pres = Number(data[i].pres);
		leg = Number(data[i].leg);
		_61_70 = Number(data[i]._61_70);
		_51_60 = Number(data[i]._51_60);
		_41_50 = Number(data[i]._41_50);
		_31_40 = Number(data[i]._31_40);
		_22_30 = Number(data[i]._22_30);
		_18_21 = Number(data[i]._18_21);
		plus70 = Number(data[i].plus70);
		/*-----------------------------------*/
		length = 1; //start counting new length for the next city
		obj = {} //prepare new obj for the next city
	}
}


console.log(tab)
