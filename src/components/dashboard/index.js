import React from "react";
import styles from "./style.module.css";
import image from "../../assets/images/logo.png";
import MessageIcon from "../../icons/message";
import NotifictonIcon from "../../icons/notificton";
import SearchIcon from "../../icons/search";
const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.d_wrapper}>
          <div className={styles.dw_header}>
            <div className={styles.dwh_navbar}>
              <div className={styles.dwhn_logo}>
                <img src={image} alt="" />
              </div>
              <div className={styles.dwhn_search}>
                <label for="search">
                  <SearchIcon />
                </label>
                <input type="search" id="search" placeholder="Search..." />
              </div>
              <div className={styles.dwhn_user}>
                <div className={styles.du_message}>
                  <MessageIcon />
                </div>
                <div className={styles.du_notifiction}>
                  <NotifictonIcon />
                </div>
                <div className={styles.du_userName}>
                  <span className={styles.dun_latter}>R</span>
                  <span className={styles.dun_name}>Randhir kumar</span>
                  <span className={styles.dun_icon}></span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dw_maindeshboard}>
            <div className={styles.dwm_siderBar}></div>
            <div className={styles.dwm_mainbody}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
