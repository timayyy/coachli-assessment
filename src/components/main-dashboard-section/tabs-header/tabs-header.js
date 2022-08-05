import { StyledContainer } from "../main-dashboard-section.style";
import {
  StyledTabItem,
  StyledTabsGrid,
  StyledTabsWrapper,
} from "./tabs-header.style";

const TabHeader = () => {
  return (
    <StyledTabsWrapper>
      <StyledContainer>
        <StyledTabsGrid>
          <StyledTabItem>Overview</StyledTabItem>
          <StyledTabItem className="active">Guest List</StyledTabItem>
          <StyledTabItem>Temporary Traffic</StyledTabItem>
        </StyledTabsGrid>
      </StyledContainer>
    </StyledTabsWrapper>
  );
};

export { TabHeader };
