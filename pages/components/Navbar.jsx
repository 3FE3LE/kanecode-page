import React, { useEffect } from "react";

import { useFormik } from "formik";

import HelpPopover from "./HelpPopover";
import NotifyPopover from "./NotifyPopover";
import ProfilePopover from "./ProfilePopover";

const Navbar = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
  });

  useEffect(() => {}, [formik.values.search]);

  return (
    <nav className="dashboard__nav">
      <div className="nav__search-bar">
        <img className="search-bar__img" src="/search.svg" alt="search-ico" />
        <input
          className="search-bar__input"
          placeholder="Buscar..."
          type="text"
          name="search"
          value={formik.values.search}
          onChange={formik.handleChange}
        />
      </div>
      <div className="nav">
        <div className="nav__icons">
          <div className="nav__popover">
            <HelpPopover/>
          </div>
          <div className="nav__popover">
            <NotifyPopover/>
          </div>
          <img src="/msg.svg" alt="ico3" />
        </div>
        <ProfilePopover/>
      </div>
    </nav>
  );
};

export default Navbar;
