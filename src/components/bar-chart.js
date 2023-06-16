import React, { useState } from "react"
import { Bar } from "react-chartjs-2"
export default function BarChart({chartData}) {
    const [ useState,setUserData] =useState();
    return (
        <div>
                <Bar data={chartData} options={{aspectRatio}}/>
        </div>
    )
}