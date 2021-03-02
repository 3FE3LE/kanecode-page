import React from "react";

// components
import TooltipCustom from "./TooltipCustom";


const ChartSection = () => {

  const dataChart = [
    {
      news: 0,
      recurrent: 0,
    },
    {
      news: 0,
      recurrent: 0,
    },
    {
      news: 0,
      recurrent: 0,
    },
    {
      news: 0,
      recurrent: 0,
    },
    {
      news: 0,
      recurrent: 0,
    },
    {
      news: 0,
      recurrent: 0,
    },
  ];

  return (
    <div className="section--chart">
      {dataChart.map((item) => (
        <TooltipCustom
          placement="left"
          interactive
          title={
            <div className="stats__tooltip">
              <span className="chart--data"><div className="data--new"></div><strong>{item.recurrent}</strong> recurrentes</span>
              <span className="chart--data"><div className="data--recurrent"></div><strong>{item.news}</strong> Nuevos</span>
            </div>
          }
          children={<div className="chart--space"></div>}
        ></TooltipCustom>
      ))}
    </div>
  );
};

export default ChartSection;
