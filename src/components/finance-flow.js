import { useState } from "react";

import { Card, Title, AreaChart } from "@tremor/react";
export default function App() {
    const chartdata = [
        {
            date: "Jan 22",
            SemiAnalysis: 2890,
            "The Pragmatic Engineer": 2338,
        },
        {
            date: "Feb 22",
            SemiAnalysis: 2756,
            "The Pragmatic Engineer": 2103,
        },
        {
            date: "Mar 22",
            SemiAnalysis: 3322,
            "The Pragmatic Engineer": 2194,
        },
        {
            date: "Apr 22",
            SemiAnalysis: 3470,
            "The Pragmatic Engineer": 2108,
        },
        {
            date: "May 22",
            SemiAnalysis: 3475,
            "The Pragmatic Engineer": 1812,
        },
        {
            date: "Jun 22",
            SemiAnalysis: 3129,
            "The Pragmatic Engineer": 1726,
        },
    ];
    const dataFormatter = (number) => {
        return "$ " + Intl.NumberFormat("us").format(number).toString();
    };


    return (
        <div>
            <div>
                <Card>
                    <Title>Newsletter revenue over time (USD)</Title>
                    <AreaChart
                        className="h-72 mt-4"
                        data={chartdata}
                        index="date"
                        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                        colors={["indigo", "cyan"]}
                        valueFormatter={dataFormatter}
                    />
                </Card>
            </div>
            <div className="finance-flow bg-light special-rounded d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex flex-column  p-4 mt-3">
                    <p>Finance flow</p>
                    <p className="fw-bold mt-5">$2,530</p>
                    <p className="fw-lighter">September 2023</p>
                </div>

            </div>
        </div>
    )

}