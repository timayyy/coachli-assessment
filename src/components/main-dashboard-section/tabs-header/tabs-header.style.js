import styled from "styled-components";

export const StyledTabsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;
export const StyledTabsGrid = styled.div`
  display: flex;
  /* overflow-x: scroll; */
  gap: 2rem;
`;
export const StyledTabItem = styled.div`
  padding: 1rem 1.5rem;
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  //   width: 16.2rem;
  color: #cfcfcf;
  border-bottom: none;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    font-size: 1.4rem;
  }

  // &:hover {
  //   font-weight: 700;
  //   color: ${({ theme }) => theme.colors.black};
  //   border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  // }

  &.active {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }
`;
