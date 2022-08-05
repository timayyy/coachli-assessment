import styled from "styled-components";
import { MenuData, SettingsMenuData } from "../../../services/menuData";
import NavLink from "../nav-link";

const LinksGroup = styled.div`
  padding: 0 2rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: ${(p) => Number(!p.compact)};
  margin-right: 2px;
  overflow: hidden;
  overflow-y: auto;
  background-color: rgba(250, 250, 250, 0.1);
  transition: flex-grow 0.3s cubic-bezier(0.4, 0, 1, 1);
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    // background: rgba(255, 255, 255, 0.4);
    background: grey;
    border-radius: 4px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 1140px) {
    flex-grow: 1;
  }

  .navlink-section {
    margin-top: 6rem;

    .navlink-section-title {
      font-weight: 400;
      text-transform: uppercase;
      padding: 0 1.5rem 1.5rem 1.5rem;
    }
  }
`;

const NavLinkGroup = (props) => {
  return (
    <LinksGroup {...props}>
      <div className="navlink-section">
        <h1 className="navlink-section-title"> Main menu</h1>
        {MenuData.map((menu, i) => (
          <NavLink
            key={i}
            toggleNav={props.toggleNav}
            link={menu.to}
            compact={props.compact}
            label={menu.label}
            icon={menu.icon}
            hasNotification={menu.hasNotification}
          />
        ))}
      </div>
      <div className="navlink-section">
        <h1 className="navlink-section-title">Settings</h1>
        {SettingsMenuData.map((menu, i) => (
          <NavLink
            key={i}
            toggleNav={props.toggleNav}
            compact={props.compact}
            label={menu.label}
            icon={menu.icon}
          />
        ))}
      </div>
    </LinksGroup>
  );
};

export default NavLinkGroup;
