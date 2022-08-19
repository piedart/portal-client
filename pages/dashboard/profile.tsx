import styles from "../../styles/Profile.module.css";
import axios from "axios";
const DashboardProfile = ({ user }: any) => {
  return (
    <div>
      <div className={styles.DashboardHome}>
        <div className={styles.DashboardHomeRow1}>
          <div className={styles.DashboardHomeRow1Welcome}>
            <h3>Welcome Back,</h3>
          </div>
          <div className={styles.DashboardHomeRowSummary}>{user.robloxUsername}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
