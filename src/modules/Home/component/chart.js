import React, { useState ,useEffect} from 'react';
import {Line} from 'react-chartjs-2'
const Chart = () => {
    const [chartData,setChartData] = useState({});
    const chart =()=>{
        setChartData({
            labels : ['A',"B","C","D"],
            datasets :[
                {
                    type: 'line',
                    data: [1,2,3,4],
                    backgroundColor :[
                        'rgb(32, 166, 207)',
                    ],
                    borderWidth : 4
                }
            ]
        })
    }
    useEffect(() => {
        chart()   
    },[])
    return (
        <div className="chart-admin">
            <Line data={chartData} />
        </div>
    );
};

export default Chart;