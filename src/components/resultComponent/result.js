import React, {useEffect} from 'react';  
import Highcharts from 'highcharts';
import './result.scss';
import { useQuestions } from '../questionsComponent/questions';

function Result() {

    const { votes, qTitle } = useQuestions();
    
    const count = {};
    votes.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    
    let xAxis = Object.keys(count),
        yAxis = Object.values(count),
        seperatedVotes = [...yAxis];

    
    console.log(Object.values(count))
    
    let totalVotes = Object.values(count).reduce((acc, num) => {
        acc += num
        return acc
      }, 0)

    useEffect(() => {
        Highcharts.chart('container', {
            chart: {
                type: 'column',
                width: 500,
                height: 500,
            },
            title: {
                text: ''
            },
            xAxis: {
                title: {
                    text: 'Question Options'
                },
                categories: xAxis
            },
            yAxis: {
                title: {
                    text: 'Votes'
                },
                tickInterval: 1
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },
            credits:{
                enabled: false
            },  
            series: [{
                data: seperatedVotes        
            }]
        });

        
    });


    return <div className="result-wrapper">
        <h3 className="chart-title">{qTitle}</h3>
        <div id="container"></div>
        <div className="totalVotes">Total votes: {totalVotes}</div>
    </div>
}


export default Result;