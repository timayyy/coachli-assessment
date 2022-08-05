import styled from "styled-components";
const StyledLink = styled.div`
 display: flex;
 align-items:center;
 padding: 1.5rem;
 z-index: 10;
 position: relative;

 .label {
     margin-left: 1.5rem;
    //  margin-right: 7px;
     font-weight: 500;
     font-size: 1.4rem;
     white-space: nowrap;
    opacity: ${(p) => Number(!p.compact)};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
 }

    .icon-container {
        opacity: 1;
    }

    .icon-bubble {
        padding: 2px 6px;
        background-color: ${({ theme }) => theme.colors.notificationBubble};
        color: ${({ theme }) => theme.colors.white};
        font-size: 1rem;
        font-weight: 700;
        border-radius: 1.2rem;
        margin-left: 7px;
    }

 &:hover {
    .label {
        font-weight: 700;
    }

    .icon-container {
        color: ${({ theme }) => theme.colors.black};
    }
 }

 &.active{
    background-color: ${({ theme }) => theme.colors.navLinkActive};
    border-radius: 1.2rem;
    
    .label, .icon-container {
        color: ${({ theme }) => theme.colors.black};
        font-weight: 700;
    }
  }

 @media(max-width: 1140px) {
    .label {
        opacity: 1;
    }
    
  );
`;

const LinkContainer = styled.div`
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 3px;
    background-color: ${({ theme }) => theme.colors.navLinkActive};
    transform: scaleY(0);
    transition: transform 0.1s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.1s;
    border-radius: 1.2rem;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }
`;

const IconContainer = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.colors.navLinkColorDefault};
  opacity: 1;
  svg {
    height: 2.4rem;
    width: 2.4rem;
  }
`;

const NavLink = ({
  children,
  icon,
  label,
  toggleNav,
  compact,
  key,
  hasNotification,
  ...rest
}) => {
  return (
    <LinkContainer>
      <StyledLink
        className={label === "Dashboard" && "active"}
        compact={compact}
        {...rest}
      >
        {children || (
          <>
            <IconContainer className="icon-container">{icon}</IconContainer>
            <div className="label">
              <span>{label}</span>
            </div>
            {hasNotification && (
              <div className="icon-bubble">{hasNotification}</div>
            )}
          </>
        )}
      </StyledLink>
    </LinkContainer>
  );
};

export default NavLink;
