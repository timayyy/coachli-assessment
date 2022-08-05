import { Logo } from '../logo'
import { StyledSideBar } from './dashboard-sidebar.style'
import { Backdrop } from '../backdrop'
import { useState } from 'react'
import NavLinkGroup from './nav-link-group'

const DashboardSidebar = (props) => {
    const [compact, setCompact] = useState(0)
    return (
        <>
            <Backdrop visible={props.visible} onClick={props.close} />
            <StyledSideBar compact={compact} {...props}>
                <Logo close={props.close} compact={compact} setCompact={setCompact} />
                <NavLinkGroup compact={compact} setCompact={setCompact} />
            </StyledSideBar>
        </>
    )
}

export { DashboardSidebar }
