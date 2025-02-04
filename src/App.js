import React from "react";
import "./App.css";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Жилье", 3],
  ["Еда", 6],
  ["Транспорт", 7],
  ["Развлечения", 3],
  ["Одежда", 2],
  ["Сбережения", 5],
];

const options = {
  title: "Распределение месячного бюджета",
  titleTextStyle: {
    fontSize: 22,
    bold: true,
  },
  legend: {
    textStyle: {
      fontSize: 16,
      color: "#black",
    },
  },
  pieSliceText: "percentage",
  pieSliceTextStyle: {
    fontSize: 16,
    color: "#ffff",
  },
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
export default App;
