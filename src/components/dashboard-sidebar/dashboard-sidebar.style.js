import styled from "styled-components";

export const StyledSideBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  width: 24rem;
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 5px 15px rgba(31, 44, 70, 0.08);
  display: flex;
  flex-direction: column;
  transition-property: width, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: cubic- bezier(0.4, 0, 1, 1) !important;
  // overflow: hidden;

  @media (max-width: 1140px) {
    position: fixed;
    width: 24rem;
    transform: translate3d(
      ${({ visible }) => (visible ? 0 : "calc(24rem - 24rem*2)")},
      0,
      0
    );
    transition: transform 0.3s
      ${({ visible }) =>
        visible
          ? "cubic-bezier(0.4, 0, 1, 1)"
          : "cubic-bezier(0, 0, 0.2, 1)"} !important;
  }
  @media (max-width: 356px) {
    height: 100%;
    // width: 100%;
  }
`;
