import React from "react";
import { NavLink } from "react-router-dom";
import { StyledCartLink, StyledHeader, StyledLink } from "./NavBar.styled";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/slice";

const NavBar = () => {
  const cart = useSelector(selectCart).length;
  return (
    <StyledHeader>
      <StyledLink to="/">Logo</StyledLink>
      <nav>
        <NavLink to="/">Home</NavLink>
        <StyledCartLink to="/cart">
          Cart {cart ? <span>{cart}</span> : null}
        </StyledCartLink>
      </nav>
    </StyledHeader>
  );
};

export default NavBar;
