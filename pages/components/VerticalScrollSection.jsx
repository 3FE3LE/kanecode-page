import React from "react";

const VerticalScrollSection = () => {
  const monthlyRewards = [
    {
      month: "Octubre",
      reward: "$629.75",
    },
    {
      month: "Noviembre",
      reward: "$270.18",
    },
    {
      month: "Diciembre",
      reward: "$485.35",
    },
    {
      month: "Enero",
      reward: "$482.53",
    },
    {
      month: "Febrero",
      reward: "$323.61",
    },
    {
      month: "Marzo",
      reward: "$704.15",
    },
  ];

  return (
    <div className="section--division section--vertical--scroll">
      {monthlyRewards.map((item) => (
        <div key={item.month}>
          <span>{item.month}</span>
          <p>{item.reward}</p>
        </div>
      ))}
    </div>
  );
};

export default VerticalScrollSection;
