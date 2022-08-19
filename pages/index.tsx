import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Index.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("api.britsov.uk/api/auth/login");
  };
  return (
    <div>
      <div className={styles.IndexDiv}>
        <div className={styles.CentreDiv}>
          <h2 className={styles.CentreDivTitle}>Royal Navy Online Portal</h2>
          <div className={styles.CentreDivLoginButton} onClick={handleClick}>
            <h3 className={styles.CentreDivLoginButtonText}>Login</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
