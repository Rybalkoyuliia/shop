import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { StyledMain } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Layout;
