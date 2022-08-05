import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: grid;
  grid:
    "nav header" min-content
    "nav main" 1fr / min-content 1fr;
  min-height: 100vh;

  @media only screen and (max-width: 1140px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DashboardSideBarContainer = styled.div`
  grid-area: nav;
  z-index: 2000;
`;

export const DashboardHeaderContainer = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const DashboardMainContainer = styled.main`
  grid-area: main;
  background-color: #f9f9f9;
`;
