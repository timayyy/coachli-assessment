import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 7.5rem;
  background-color: #fff;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;

export const IconContainer = styled.div`
  display: none;

  @media (max-width: 1140px) {
    display: block;
    // align-self: end;
    margin-right: 4rem;
    color: ${({ theme }) => theme.colors.black};
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 1.5rem;
`;
export const NotificationIconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid #f2f2f2;
  margin: 0px 24px;
`;

export const AvatarContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: red;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
