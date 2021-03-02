import React, { useState } from "react";

import { Popover } from "@material-ui/core";

const ProfilePopover = () => {
  const [openPopover, setOpenPopover] = useState(null);

  const handleClick = (event) => {
    console.log(event.target);
    setOpenPopover(event.target);
  };

  const open = Boolean(openPopover);

  const id = open ? "profile" : null;

  const profileItems = [
    {
      svg: "",
      span: "mi cuenta",
    },
    {
      svg: "",
      span: "mi plan",
    },
    {
      svg: "",
      span: "administrar roles",
    },
    {
      svg: "",
      span: "notifaciones",
    },
  ];

  const handleClose = () => setOpenPopover(null);
  return (
    <div className="nav__profile">
      <img
        aria-describedby={"profile"}
        onClick={() => handleClick(event)}
        src="/Ellipse 5.png"
        alt="avatar"
      />
      <span aria-describedby={"profile"} onClick={() => handleClick(event)}>
        Liliana Mora
      </span>
      <img
        aria-describedby={"profile"}
        onClick={() => handleClick(event)}
        src="/arrow.svg"
        alt=""
      />
      <Popover
        onClose={handleClose}
        anchorEl={openPopover}
        id={id}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <ul className="popover__profile--items">
          {profileItems.map((item) => (
            <li key={item.path}>
              {item.svg}
              <span>{item.span}</span>
            </li>
          ))}
        </ul>
        <ul className="popover__profile--items">
          <li>
            <img src="" alt="" />
            <span>Salir</span>
          </li>
        </ul>
      </Popover>
    </div>
  );
};

export default ProfilePopover;
