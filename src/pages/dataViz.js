import React, { useState } from "react";
import Layout from '../components/layout'
import dataVizStyles from '../styles/dataViz.module.scss'
import PieClass from '../components/visualization'
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
var allRawData = [
    [
        ["0 hours", "0 hours", "0 hours", "0 hours", "0 hours", "6.06 hours", "7.67 hours"],
        ["5.65 hours", "7.91 hours", "6.63 hours", "2.72 hours", "6.40 hours", "7.28 hours", "6.18 hours"],
        ["4.97 hours", "7.83 hours", "8.45 hours", "7.88 hours", "7.75 hours", "6.71 hours", "5.08 hours"],
        ["4.28 hours", "4.40 hours", "4.93 hours", "7.43 hours", "7.58 hours", "6.16 hours", "7.20 hours"],
        ["6.43 hours", "7.83 hours", "6.67 hours", "7.72 hours", "6.49 hours", "6.13 hours", "0 hours"]
    ],
    [
        ["0 calories", "0 calories", "0 calories", "0 calories", "0 calories", "2,455 calories", "2,628 calories"],
        ["3,028 calories", "2,860 calories", "3,178 calories", "2,414 calories", "3,112 calories", "2,983 calories", "2,867 calories"],
        ["2,919 calories", "3,104 calories", "2,993 calories", "3,215 calories", "3,347 calories", "1,860 calories", "2,812 calories"],
        ["3,446 calories", "3,147 calories", "3,382 calories", "3,127 calories", "3,857 calories", "2,759 calories", "3,967 calories"],
        ["3,332 calories", "2,854 calories", "3,152 calories", "2,888 calories", "3,171 calories", "3,685 calories", "0 calories"]
    ],
    [
        ["0 steps", "0 steps", "0 steps", "0 steps", "0 steps", "5,458 steps", "8,848 steps"],
        ["11,882 steps", "11,099 steps", "12,559 steps", "5,738 steps", "12,960 steps", "8,405 steps", "10,010 steps"],
        ["10,340 steps", "14,093 steps", "11,732 steps", "13,134 steps", "12,846 steps", "10,262 steps", "7,656 steps"],
        ["13,008 steps", "11,023 steps", "15,969 steps", "14,121 steps", "18,633 steps", "9,055 steps", "24,461 steps"],
        ["16,934 steps", "10,070 steps", "13,874 steps", "11,166 steps", "12,409 steps", "15,671 steps", "0 steps"],

    ],
]

var dateSpecs = [
    "Feb 1 \u2014 Feb 2",
    "Feb 3 \u2014 Feb 9",
    "Feb 10 \u2014 Feb 16",
    "Feb 17 \u2014 Feb 23",
    "Feb 24 \u2014 Feb 29"
]

const DataVizPage = ({ data }) => {
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
                <div className={dataVizStyles.displays}>
                    {/* <Img
                        className={dataVizStyles.legend}
                        fluid={data.legend.childImageSharp.fluid}
                        alt=""
                    /> */}
                    <div className={dataVizStyles.app}>
                        <p className={dataVizStyles.title}>
                            Fitbit Health Data Dashboard
                        </p>
                        <div className={dataVizStyles.weekButtons}>
                            <button className={dataVizStyles.buttonNext} onClick={prevWeek}>{"<"}{"<"}</button>
                            <div className={dataVizStyles.dates}>
                                <p className={dataVizStyles.dateSpecifics}>{dateSpecs[week]}</p>
                                <p className={dataVizStyles.weekLabel}>Week {week}</p>
                            </div>
                            <button className={dataVizStyles.buttonNext} onClick={nextWeek}>{">"}{">"}</button>
                        </div>
                        <PieClass 
                            data={[14.28,14.28,14.28,14.28,14.28,14.28,14.28]} 
                            sleepData={allData[0][week]}
                            calData={allData[1][week]}
                            stepData={allData[2][week]}
                            allRawData = {allRawData}
                            week = {week}
                            width = {700}
                            height = {700}
                            innerRadius = {100} 
                            outerRadius={160} 
                        />
                    </div>  
                </div>
            </Layout>
        </div>
    )
    
}


export default DataVizPage