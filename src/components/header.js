import React from "react";
import { Link } from "gatsby";

import useSiteMetadata from "../use-site-metadata";
import DarkModeToggle from "./dark-mode-toggle";

import { Search } from "./search";

import "./header.css";

const Header = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <header>
      <Link to="/">
        <h3>{siteMetadata.title}</h3>
      </Link>
      <div className="controls">
        <Search />
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
