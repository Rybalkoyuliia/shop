import styled from "styled-components";

export const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 4px;
  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
  }
  div {
    display: flex;
    gap: 5px;
    button {
      padding: 3px 6px;
      border-radius: 12px;
      border: none;
      background-color: teal;
      color: white;
      &:hover {
        background-color: rgb(1, 74, 74);
        cursor: pointer;
      }
    }
  }
`;
