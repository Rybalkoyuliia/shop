import styled from "styled-components";

export const StyledProductsCard = styled.li`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StyledImgWrapper = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledContentWrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledActionsButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  button {
    background-color: teal;
    border: none;
    padding: 4px 12px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgb(1, 74, 74);
    }
  }
`;

export const StyledPrice = styled.p`
  font-weight: bold;
`;
