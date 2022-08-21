import styles from "../../styles/Profile.module.css";
import axios from "axios";
import { fetchUser } from "../../utils/fetchUser";
import SidebarTop from "../../components/SidebarTop";
import Sidebar from "../../components/Sidebar";
import main from "../../styles/Main.module.css";
const DashboardProfile = ({ user }: any) => {
  return (
    <div className={main.DashboardDiv}>
      <SidebarTop />
      <div className={main.DashboardSubDiv}>
        <Sidebar user={user} />
        <div></div>
      </div>
    </div>
  );
};

export const getServerSideProps = (ctx: any) => fetchUser(ctx);

export default DashboardProfile;
