import React, { useState } from "react";

import { Popover } from "@material-ui/core";

const NotifyPopover = () => {
  const [openPopover, setOpenPopover] = useState(null);

  const handleClick = (event) => {
    console.log(event.target);
    setOpenPopover(event.target);
  };

  const open = Boolean(openPopover);

  const id = open ? "notify" : null;

  const handleClose = () => setOpenPopover(null);
  return (
    <>
      <img
        aria-describedby={"notify"}
        onClick={() => handleClick(event)}
        src="/notify.svg"
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
          <img src="/notify1.png" alt=""/>
          <img src="/notify2.png" alt=""/>
          {/* <span>fake information</span> */}
        </div>
      </Popover>
    </>
  );
};

export default NotifyPopover;
