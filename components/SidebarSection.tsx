import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Sidebar.module.css";
const SidebarSection = ({ header, items }: any) => {
  return (
    <div className={styles.SidebarSection}>
      <h3 className={styles.SidebarSectionHeader}>{header}</h3>
      {items.map((item: any, index: number) => {
        return (
          <div className={styles.SidebarItem} key={`sidebar-${item.name}`}>
            <FontAwesomeIcon icon={item.icon} className={styles.SidebarItemIcon} />
            <h3 className={styles.SidebarItemText}>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarSection;
