import axios from "axios";
import Sidebar from "../../components/Sidebar";
import SidebarTop from "../../components/SidebarTop";
import styles from "../../styles/Events.module.css";
import { fetchUser } from "../../utils/fetchUser";
import main from "../../styles/Main.module.css";
const DashboardEvents = ({ user }: any) => {
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

export default DashboardEvents;
