import React from "react";
import { StyledSideNavbar, StyledSideNavbarEle } from "./style";
import { Link } from "react-router-dom";

function SideNavbar() {
  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Dynamic-routes",
      link: "/dynamic-routes",
    },
    {
      id: 3,
      name: "Advanced-dynamic-routes",
      link: "/advanced-dynamic-routes",
    },
  ];
  return (
    <StyledSideNavbar>
      {links.map((item, i) => (
        <StyledSideNavbarEle key={i}>
          <Link to={item.link}>{item.name}</Link>
        </StyledSideNavbarEle>
      ))}
    </StyledSideNavbar>
  );
}

export default SideNavbar;
