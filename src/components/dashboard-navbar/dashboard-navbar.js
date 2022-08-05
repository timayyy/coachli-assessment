import {
  NavbarContainer,
  IconContainer,
  ActionsContainer,
  NotificationIconContainer,
  AvatarContainer,
} from "./dashboard-navbar.style";
import { MdMenu } from "react-icons/md";
import { RiNotification2Fill } from "react-icons/ri";

const DashboardNavbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <IconContainer>
        <MdMenu fontSize="large" onClick={toggle} />
      </IconContainer>
      <ActionsContainer>
        <NotificationIconContainer>
          {/* <IconButton > */}
          <RiNotification2Fill fontSize="large" />
          {/* </IconButton> */}
        </NotificationIconContainer>
        <AvatarContainer>
          <img
            src="https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="profile"
          />
        </AvatarContainer>
      </ActionsContainer>
    </NavbarContainer>
  );
};

export { DashboardNavbar };
