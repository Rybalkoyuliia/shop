import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 20px 15px;
  background-color: teal;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    gap: 20px;
    a {
      color: inherit;
      text-decoration: none;
      &.active {
        color: black;
        text-decoration: underline;
      }
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export const StyledCartLink = styled(NavLink)`
  position: relative;
  span {
    position: absolute;
    background-color: white;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -15px;
    top: -15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: black;
  }
`;
