import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import qualifications from "../../public/data/qualifications.json";
import { fetchUser } from "../../utils/fetchUser";
import SidebarTop from "../../components/SidebarTop";
import main from "../../styles/Main.module.css";
const renderQualifications = (user: any) => {
  if (user.qualifications.length === 0) return <h3 className={styles.NoItems}>You have no qualifications...</h3>;
  else {
    return (
      <div>
        {user.qualifications.map((dbQualification: any, index: number) => {
          const qualification = qualifications.find((qualification) => qualification.id === dbQualification.qualificationId);
          const level = qualification?.levels.find((level) => level.id === dbQualification.roleId);
          return (
            <div className={styles.Qualification} key={`qualification-${index}`}>
              {/* @ts-ignore */}
              <div className={styles.QualificationColour} style={{ backgroundColor: qualification?.colour }}></div>
              <div className={styles.QualificationLabel}>
                <h3 className={styles.QualificationName}>{qualification?.name}</h3>
                <h3 className={styles.QualificationLevel}>{level?.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

const renderConductWarnings = (user: any) => {
  if (user.conductWarnings.length === 0) return <h3 className={styles.NoItems}>You have no warnings...</h3>;
  else {
    const warningFunction = () => {
      const warning = user.conductWarnings[user.conductWarnings.length - 1];
      const date = new Date(warning.date);
      return (
        <div className={styles.Warning}>
          <h3 className={styles.WarningTitle}>{warning.title}</h3>
          <h4 className={styles.WarningDescription}>{warning.description}</h4>
          <div className={styles.WarningIssuedBy}>
            <h4 className={styles.WarningIssuedByLabel}>Issued By:</h4>
            <h4 className={styles.WarningIssuedByValue}>{warning.issuedBy}</h4>
          </div>
          <div className={styles.WarningDate}>
            <h4 className={styles.WarningDateLabel}>Date:</h4>
            <h4 className={styles.WarningDateValue}>{`${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/2022`}</h4>
          </div>
        </div>
      );
    };

    if (user.conductWarnings.length === 1) return warningFunction();
    else
      return (
        <div>
          {warningFunction()}
          <h3 className={styles.RemainingWarnings}>View all of your warnings on your profile.</h3>
        </div>
      );
  }
};

const renderActivityWarnings = (user: any) => {
  if (user.activityWarnings.length === 0) return <h3 className={styles.NoItems}>You have no warnings...</h3>;
  else {
    const warningFunction = () => {
      const warning = user.activityWarnings[user.activityWarnings.length - 1];
      const date = new Date(warning.date);
      return (
        <div className={styles.Warning}>
          <h3 className={styles.WarningTitle}>{warning.title}</h3>
          <h4 className={styles.WarningDescription}>{warning.description}</h4>
          <div className={styles.WarningIssuedBy}>
            <h4 className={styles.WarningIssuedByLabel}>Issued By:</h4>
            <h4 className={styles.WarningIssuedByValue}>{warning.issuedBy}</h4>
          </div>
          <div className={styles.WarningDate}>
            <h4 className={styles.WarningDateLabel}>Date:</h4>
            <h4 className={styles.WarningDateValue}>{`${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/2022`}</h4>
          </div>
        </div>
      );
    };

    if (user.conductWarnings.length === 1) return warningFunction();
    else
      return (
        <div>
          {warningFunction()}
          <h3 className={styles.RemainingWarnings}>View all of your warnings on your profile.</h3>
        </div>
      );
  }
};

const renderDeployments = (user: any) => {
  return <div></div>;
};

const DashboardHome = ({ user }: any) => {
  let rankslide = `http://rn.britsov.uk/rankslides/${user.rank}.png`;
  return (
    <div className={main.DashboardDiv}>
      <SidebarTop />
      <div className={main.DashboardSubDiv}>
        <Sidebar user={user} />

        <div className={styles.DashboardHome}>
          <div className={styles.Row1}>
            <div className={styles.Welcome}>
              <h3 className={styles.WelcomeTitle}>Welcome Back,</h3>
              <h3 className={styles.WelcomeValue}>{user.robloxUsername}</h3>
            </div>
            <div className={styles.Summary}>
              <div className={styles.SummaryLeft}>
                <div className={styles.RankslideDiv}>
                  <img src={rankslide} alt="" className={styles.Rankslide} width="72px" height="115px" />
                </div>
                <h3 className={styles.RankName}>{user.rankName}</h3>
              </div>
              <div className={styles.SummaryRight}>
                <div className={styles.AttendanceColour}></div>
                <div className={styles.AttendanceLabel}>
                  <h3 className={styles.AttendanceValue}>69% Attendance</h3>
                  <h4 className={styles.AttendanceCaption}>(This Week)</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Row2}>
            <div className={styles.Row2Container}>
              <div className={styles.ContainerHeader}>
                <FontAwesomeIcon icon={faAnchor} className={styles.ContainerHeaderIcon} />
                <h3 className={styles.ContainerHeaderTitle}>Your Qualifications:</h3>
              </div>
              {renderQualifications(user)}
            </div>
            <div className={styles.Row2Container}>
              <div className={styles.ContainerHeader}>
                <FontAwesomeIcon icon={faAnchor} className={styles.ContainerHeaderIcon} />
                <h3 className={styles.ContainerHeaderTitle}>Your Warnings:</h3>
              </div>
              <h3 className={styles.WarningsHeader}>Conduct Warnings:</h3>
              <div className={styles.WarningsDivider}></div>
              {renderConductWarnings(user)}
              <h3 className={styles.WarningsHeader}>Activity Warnings:</h3>
              <div className={styles.WarningsDivider}></div>
              {renderActivityWarnings(user)}
            </div>
            <div className={styles.Row2Container}>
              <div className={styles.ContainerHeader}>
                <FontAwesomeIcon icon={faAnchor} className={styles.ContainerHeaderIcon} />
                <h3 className={styles.ContainerHeaderTitle}>Your Deployments:</h3>
              </div>
              {renderDeployments(user)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

export const getServerSideProps = (ctx: any) => fetchUser(ctx);
