import React from "react";
import { Line } from "react-chartjs-2";

const Graph = () => {
  const graphData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JUL", "AUG"],
    datasets: [
      {
        label: "",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(250, 74, 132, 0.10)",
        borderColor: "red",
        borderWidth: 2,
        fontFamily: "inherit",
        data: [4, 8.5, 11, 12.5, 13, 8, 5.5],
      },
    ],
  };

  return (
    <Line
      data={graphData}
      options={{
        // responsive: true,
        title: {
          display: false,
          text: "Money in and out per month",
          fontSize: 20,
        },
        legend: {
          display: false,
          position: "right",
          labels: {
            fontFamily: "inherit",
          },
        },
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 20,
            title: {
              display: true,
              text: "Amount in k",
            },
            ticks: {
              stepSize: 5,
            },
          },
        },
      }}
    />
  );
};

export default Graph;
