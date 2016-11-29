import React,{Component} from 'react';
import Helmet from "react-helmet";

class LeafletMap extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime
	shouldComponentUpdate() {
		return false;
	}
	//this is where we're going to insert the map to the dom
	componentDidMount() {
	var mymap = L.map(this.refs.map).setView([35.00, 9.90], 7);
/*	var marker = L.marker([36.70, 10.4]).addTo(mymap);
	marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
	var circle = L.circle([35.70, 10.4], {color: 'red', fillColor: '#f03',fillOpacity: 0.5,radius: 55500}).addTo(mymap);
	circle.bindPopup("I am a circle.");*/
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaHVudGVyLXgiLCJhIjoiY2l2OXhwOHJ5MDAzOTJ1cGtrZnRoa2NmdSJ9.o51MXiJLy8-6cE5InXp77A', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	function getColor (d)  {
   		 return d < 1000 ? '#ffffcc' :
           d < 2000  ? '#ffeda0' :
           d < 3000  ? '#fed976' :
           d < 4000  ? '#feb24c' :
           d < 5000   ? '#fd8d3c' :
           d < 6000   ? '#fd8d3c' :
           d < 7000   ? '#fc4e2a' :
           d < 8000   ? '#e31a1c' :
           d < 9000   ? '#bd0026' :
                      '#800026';
	}
	 function style(feature) {
		    return {
		        fillColor: getColor(feature.properties.mariage),
		        weight: 2,
		        opacity: 1,
		        color: 'white',
		        dashArray: '3',
		        fillOpacity: 0.7
		    };
		}	
	
        function highlightFeature(e) {
					    var layer = e.target;

					    layer.setStyle({
					        weight: 5,
					        color: '#666',
					        dashArray: '',
					        fillOpacity: 0.7
					    });

					    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
					        layer.bringToFront();
					    }
					        info.update(layer.feature.properties);

	}	
	function resetHighlight(e) {
    	geojson.resetStyle(e.target);
    	    info.update();
	}
	function zoomToFeature(e) {
    	map.fitBounds(e.target.getBounds());
	}
	function onEachFeature(feature, layer) {
	    layer.on({
	        mouseover: highlightFeature,
	        mouseout: resetHighlight,
	        click: zoomToFeature,
	        tap:highlightFeature
	    });
	}

    var geojson = L.geoJson(statesData, {style: style,onEachFeature: onEachFeature}).addTo(mymap);
    
    var info = L.control();

		info.onAdd = function (mymap) {
		    this._div = L.DomUtil.create('div', 'in'); // create a div with a class "info"
		    this.update();
		    return this._div;
		};

		// method that we will use to update the control based on feature properties passed
		info.update = function (props) {
		    this._div.innerHTML = '<h4>Marriage per city in 2016</h4>' +  (props ?
		        '<b>' + props.NAME_EN + '</b><br /><br />' +'<p>'+ props.mariage + ': mariage in 2016'+'</p>'
		        : '<p>'+'Hover over a city'+'<p />');
		};

		info.addTo(mymap);
		var legend = L.control({position: 'bottomright'});

		legend.onAdd = function (map) {

    	var div = L.DomUtil.create('div', 'in legend'),
        grades = [1000,2000,3000,4000,5000,6000,7000,8000,9000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mymap);
	
	}
	render(){
		return(

			<div id="mapid" ref="map" style ={{height:'550px'}} />

		);
	}
};

export default LeafletMap
