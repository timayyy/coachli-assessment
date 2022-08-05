import { MdDashboard, MdLiveHelp } from "react-icons/md";

import { FaUserEdit } from "react-icons/fa";
import { IoGift, IoWallet } from "react-icons/io5";
import { GiCookingPot, GiChart } from "react-icons/gi";

export const MenuData = [
  {
    label: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Catering status",
    icon: <GiCookingPot />,
  },
  {
    label: "Guest traffic",
    icon: <GiChart />,
  },
  {
    label: "Gifts",
    icon: <IoGift />,
    hasNotification: "28",
  },
];

export const SettingsMenuData = [
  {
    label: "Account",
    icon: <FaUserEdit />,
  },
  {
    label: "Wallet",
    icon: <IoWallet />,
  },
  {
    label: "Help & Support",
    icon: <MdLiveHelp />,
  },
];
