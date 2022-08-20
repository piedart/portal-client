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
          { name: "Manage Events", icon: faCalendar, page: "manageevents" },
          { name: "Manage Personnel", icon: faUser, page: "managepersonnel" },
          { name: "Records", icon: faTable, page: "records" },
          { name: "Data Pull", icon: faFileCsv, page: "datapull" },
        ]}
      />
    );
};
const Sidebar = ({ user }: any) => {
  return (
    <div className={styles.Sidebar}>
      <SidebarSection
        header="Main"
        items={[
          { name: "Home", icon: faHouse, page: "/" },
          { name: "Profile", icon: faUser, page: "profile" },
          { name: "Attendance", icon: faListOl, page: "attendance" },
          { name: "Events", icon: faCalendar, page: "events" },
        ]}
      />
      <div className={styles.SidebarDivider}></div>

      {renderActionsSection(user)}
      <div className={styles.SidebarDivider}></div>
      <SidebarSection
        header="Legal"
        items={[
          { name: "Terms of Service", icon: faAnchor, page: "termsofservice" },
          { name: "Privacy Policy", icon: faAnchor, page: "privacypolicy" },
        ]}
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
