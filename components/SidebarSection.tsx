import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
const SidebarSection = ({ header, items }: any) => {
  return (
    <div className={styles.SidebarSection}>
      <h3 className={styles.SidebarSectionHeader}>{header}</h3>
      {items.map((item: any, index: number) => {
        return (
          <Link href={`/dashboard/${item.page}`}>
            <div className={styles.SidebarItem} key={`sidebar-${item.name}`}>
              <FontAwesomeIcon icon={item.icon} className={styles.SidebarItemIcon} />
              <h3 className={styles.SidebarItemText}>{item.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarSection;
