import { useState, useEffect } from "react";
import { DashboardNavbar } from "../../components/dashboard-navbar";
import { DashboardSidebar } from "../../components/dashboard-sidebar";
import {
  DashboardContainer,
  DashboardSideBarContainer,
  DashboardHeaderContainer,
  DashboardMainContainer,
} from "./dashboard-wrapper.style";

const DashboardWrapper = ({ children }) => {
  const [showNav, setShowNav] = useState(0);

  const toggle = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DashboardContainer>
      <DashboardSideBarContainer>
        <DashboardSidebar toggleNav={toggle} visible={showNav} close={toggle} />
      </DashboardSideBarContainer>
      <DashboardHeaderContainer>
        <DashboardNavbar toggle={toggle} />
      </DashboardHeaderContainer>
      <DashboardMainContainer>{children}</DashboardMainContainer>
    </DashboardContainer>
  );
};

export { DashboardWrapper };
