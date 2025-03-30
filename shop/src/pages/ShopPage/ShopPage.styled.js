import styled from "styled-components";

export const StyledList = styled.ul`
  padding: 0;
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
`;
