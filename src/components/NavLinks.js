import React from "react";
import { pageLinks } from "../data";

const NavLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a href={href} className="nav-link">
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
