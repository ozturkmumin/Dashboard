import React from "react";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartData = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const BarChartComponent = () => (
  <Card>
  
    <BarChart
      className="mt-6 bar-setting"
      data={chartData}
      index="name"
      categories={["Number of threatened species"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
    />
  </Card>
);

export default BarChartComponent;
