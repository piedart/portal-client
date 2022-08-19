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

const renderActionsSection = (user: any) => {
  if (user.permissionLevel > 1)
    return (
      <SidebarSection
        header="Actions"
        items={[
          { name: "Manage Events", icon: faCalendar },
          { name: "Manage Personnel", icon: faUsers },
          { name: "Records", icon: faTable },
          { name: "Data Pull", icon: faFileCsv },
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
          { name: "Home", icon: faHouse },
          { name: "Profile", icon: faUser },
          { name: "Attendance", icon: faListOl },
          { name: "Events", icon: faCalendar },
        ]}
      />
      <div className={styles.SidebarDivider}></div>

      {renderActionsSection(user)}
      <div className={styles.SidebarDivider}></div>
      <SidebarSection
        header="Legal"
        items={[
          { name: "Terms of Service", icon: faAnchor },
          { name: "Privacy Policy", icon: faAnchor },
        ]}
      />

      <div className={styles.SidebarFooter}>
        <div className={styles.SidebarItem}>
          <FontAwesomeIcon icon={faCircleInfo} className={styles.SidebarItemIcon} />
          <h3 className={styles.SidebarItemText}>Support</h3>
        </div>
        <div className={styles.SidebarItem}>
          <FontAwesomeIcon icon={faLock} className={styles.SidebarItemIcon} />
          <h3 className={styles.SidebarItemText}>Logout</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
