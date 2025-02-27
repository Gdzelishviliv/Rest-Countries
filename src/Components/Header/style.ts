import styled from "styled-components";

export const Header = styled.header`
  height: 90px;
  box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
  .header-container {
    display: flex;
    margin: auto;
    padding-inline: 30px;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    p {
      cursor: pointer;
    }
  }
`;
