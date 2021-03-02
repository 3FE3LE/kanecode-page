import React from "react";

// third party components
import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";



const ChartSection = () => {
  const TooltipCustom = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#ffffff",
      padding: 0,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
      margin: 0,
      boxShadow: "0 12px 30px #0000001A",
      
    },
  }))(Tooltip);

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
