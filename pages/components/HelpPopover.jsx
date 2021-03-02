import React, { useState } from "react";

import { Popover } from "@material-ui/core";

const HelpPopover = () => {
  const [openPopover, setOpenPopover] = useState(null);

  const handleClick = (event) => {
    console.log(event.target);
    setOpenPopover(event.target);
  };

  const open = Boolean(openPopover);

  const id = open ? "help" : null;

  const handleClose = () => setOpenPopover(null);
  return (
    <>
      <img
        aria-describedby={"help"}
        onClick={() => handleClick(event)}
        src="/help.svg"
        alt="ico1"
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
          horizontal: "right",
        }}
      >
        <div>
          <img src="/hekp.png" alt=""/>
          <span>fake information</span>
        </div>
      </Popover>
    </>
  );
};

export default HelpPopover;
