import styles from "../styles/Sidebar.module.css";
import logo from "../public/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// const handleClick = () => {
//   return true;
// }
const SidebarTop = () => {
  return (
    <div className={styles.SidebarTop}>
      <div className={styles.SidebarTopTitleDiv}>
        <div className={styles.SidebarTopTitleImage}>
          <Image src={logo} width="60%" height="70%" />
        </div>
        <h3 className={styles.SidebarTopTitleText}>Online Portal</h3>
      </div>
      <div className={styles.SidebarTopRight}>
        <FontAwesomeIcon icon={faBars} className={styles.HamburgerIcon} />
      </div>
    </div>
  );
};

export default SidebarTop;
