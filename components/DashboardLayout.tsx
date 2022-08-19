import Sidebar from "./Sidebar";
import SidebarTop from "./SidebarTop";
import styles from "../styles/DashboardLayout.module.css";
const DashboardLayout = ({ user, component }: any) => {
  return (
    <div className={styles.DashboardDiv}>
      <SidebarTop />
      <div className={styles.DashboardSubDiv}>
        <Sidebar user={user} />
        {component}
      </div>
    </div>
  );
};

export default DashboardLayout;
