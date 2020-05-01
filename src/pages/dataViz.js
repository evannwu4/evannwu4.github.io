import React, { useState, useEffect } from "react";
import Layout from '../components/layout'
import dataVizStyles from '../styles/dataViz.module.scss'
import PieClass from '../components/visualization'


var allData = [
        [
            [0, 0, 0, 0, 0, 20.33, 28.33],
            [18.25, 29.58, 23.16, 3.58, 22, 26.42, 20.92],
            [14.83, 29.16, 32.25, 29.42, 28.75, 23.58, 15.42],
            [11.42, 12, 14.66, 27.16, 27.92, 20.83, 26],
            [22.16, 29, 24, 28.42, 23, 20.91, 0],
        ],
        [
            [0, 0, 0, 0, 0, 17.46, 19.54],
            [24.34, 22.32, 26.14, 16.97, 25.34, 23.80, 22.40],
            [23.03, 25.25, 23.93, 26.58, 28.16, 10.32, 21.74],
            [29.35, 25.76, 28.58, 25.52, 34.28, 21.11, 35.60],
            [27.98, 22.24, 25.82, 22.65, 26.05, 32.22, 0    ],           
        ],
        [
            [0, 0, 0, 0, 0, 6.92, 13.70],
            [19.76, 18.19, 21.11, 7.47, 21.92, 12.81, 16.02],
            [16.68, 24.18, 19.46, 22.26, 21.69, 16.52, 11.31],
            [22.01, 18.04, 27.93, 24.24, 33.26, 14.11, 44.92],
            [29.86, 16.14, 23.74, 18.33, 20.81, 27.34, 0    ],
        ],
    ]


const DataVizPage = () => {
    const [week, setWeek] = useState(0);
    const prevWeek = () => {
        if (week !== 0) {
            setWeek(week-1);
        }
    };
    const nextWeek = () => {
        if (week !== 4) {
            setWeek(week+1);
        }
    };
    return (
        <div>
            <Layout>
                <div className={dataVizStyles.app}>
                    <p className={dataVizStyles.title}>
                        Fitbit Health Data Dashboard
                    </p>
                    <div className={dataVizStyles.weekButtons}>
                        <button onClick={prevWeek}>{"<"}{"<"}</button>
                        <p className={dataVizStyles.weekLabel}>Week {week}</p>
                        <button onClick={nextWeek}>{">"}{">"}</button>
                    </div>
                    <PieClass 
                        data={[14.28,14.28,14.28,14.28,14.28,14.28,14.28]} 
                        sleepData={allData[0][week]}
                        calData={allData[1][week]}
                        stepData={allData[2][week]}
                        width = {700}
                        height = {700}
                        innerRadius = {100} 
                        outerRadius={160} 
                    />
                </div>  
            </Layout>
        </div>
    )
    
}

export default DataVizPage