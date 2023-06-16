import { useState } from "react";
import BarChart from "./bar-chart";

export default function App() {
    const [userData , setUserData] = useState({
        labels: userData.map((data) => data.year),
        datasets:[{
            label:"Users Gained",
            data :userData.map((data) => data.userGain),
        }]

    });
    return (
        <div>
            <div className="finance-flow bg-light special-rounded d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex flex-column  p-4 mt-3">
                    <p>Finance flow</p>
                    <p className="fw-bold mt-5">$2,530</p>
                    <p className="fw-lighter">September 2023</p>
                </div>
                <div>
                    <BarChart/>
                </div>
            </div>
        </div>
    )

}