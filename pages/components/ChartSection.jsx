import React from "react";
import { Tooltip } from "@material-ui/core";


const ChartSection = () => {

  const dataChart = [
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
    {
      news: 0,
      recurrents: 0,
    },
  ];

  return (
    <div className="section--chart">
      {dataChart.map((item) => (
        <Tooltip
          placement="left"
          interactive
          title={
            <>
              <span className="chart--data">{item.news} Nuevos</span>
              <span className="chart--data">{item.recurrents} recurrentes</span>
            </>
          }
          children={<div className="chart--space"></div>}
        ></Tooltip>
      ))}
    </div>
  );
};

export default ChartSection;
