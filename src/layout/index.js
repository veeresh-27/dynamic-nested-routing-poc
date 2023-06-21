import React from "react";
import SideNavbar from "../components/sideNavbar";
import { StyledLayout, StyledLeftLayout, StyledMainSection } from "./style";

function Layout({ children }) {
  return (
    <StyledLayout>
      <StyledLeftLayout>
        <SideNavbar />
      </StyledLeftLayout>
      <StyledMainSection>{children}</StyledMainSection>
    </StyledLayout>
  );
}

export default Layout;
