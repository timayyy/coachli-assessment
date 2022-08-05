import { Logo } from "../logo";
import { StyledSideBar } from "./dashboard-sidebar.style";
import { Backdrop } from "../backdrop";
import { useState } from "react";
import NavLinkGroup from "./nav-link-group";
import NavLink from "./nav-link";
import { BiLogOut } from "react-icons/bi";

const DashboardSidebar = (props) => {
  const [compact, setCompact] = useState(0);
  return (
    <>
      <Backdrop visible={props.visible} onClick={props.close} />
      <StyledSideBar compact={compact} {...props}>
        <Logo close={props.close} compact={compact} setCompact={setCompact} />
        <NavLinkGroup compact={compact} setCompact={setCompact} />
        {/* <NavLink label="Logout" icon={<BiLogOut />} /> */}
      </StyledSideBar>
    </>
  );
};

export { DashboardSidebar };
