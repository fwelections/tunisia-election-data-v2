import React,{Component} from 'react';

class Highchart extends Component{
	//this will define whether the component should render or not 
	//this component should rerender only onetime
	shouldComponentUpdate() {
		return false;
	}
	//this is where we're going to insert the map to the dom
	componentDidMount() {

 var myChart = Highcharts.chart(this.refs.chart, {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }],
        credits: false
    });

	
	}
	render(){
		return(

			<div id="chart" ref="chart" style ={{height:'550px'}} />

		);
	}
};

export default Highchart
