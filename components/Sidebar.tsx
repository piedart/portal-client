import styles from "../styles/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faListOl,
  faCalendar,
  faUsers,
  faTable,
  faFileCsv,
  faAnchor,
  faCircleInfo,
  faLock,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import SidebarSection from "./SidebarSection";
import Link from "next/link";

const renderActionsSection = (user: any) => {
  if (user.permissionLevel > 1)
    return (
      <SidebarSection
        header="Actions"
        items={[
          { name: "Manage Events", icon: faCalendar, page: "/dashboard/manageevents" },
          { name: "Manage Personnel", icon: faUser, page: "/dashboard/managepersonnel" },
          { name: "Records", icon: faTable, page: "/dashboard/records" },
          { name: "Data Pull", icon: faFileCsv, page: "/dashboard/datapull" },
        ]}
        user={user}
      />
    );
};
const Sidebar = ({ user }: any) => {
  return (
    <div className={styles.Sidebar}>
      <SidebarSection
        header="Main"
        items={[
          { name: "Home", icon: faHouse, page: "/dashboard/" },
          { name: "Profile", icon: faUser, page: "/dashboard/profile" },
          { name: "Attendance", icon: faListOl, page: "/dashboard/attendance" },
          { name: "Events", icon: faCalendar, page: "/dashboard/events" },
        ]}
        user={user}
      />
      <div className={styles.SidebarDivider}></div>

      {renderActionsSection(user)}
      <div className={styles.SidebarDivider}></div>
      <SidebarSection
        header="Legal"
        items={[
          { name: "Terms of Service", icon: faAnchor, page: "/dashboard/termsofservice" },
          { name: "Privacy Policy", icon: faAnchor, page: "/dashboard/privacypolicy" },
        ]}
        user={user}
      />

      <div className={styles.SidebarFooter}>
        <Link href="/">
          <div className={styles.SidebarItem}>
            <FontAwesomeIcon icon={faCircleInfo} className={styles.SidebarItemIcon} />
            <h3 className={styles.SidebarItemText}>Support</h3>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.SidebarItem}>
            <FontAwesomeIcon icon={faLock} className={styles.SidebarItemIcon} />
            <h3 className={styles.SidebarItemText}>Logout</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
