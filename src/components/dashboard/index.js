import React from "react";
import styles from "./style.module.css";
import image from "../../assets/images/logo.png";
import MessageIcon from "../../icons/message";
import NotifictonIcon from "../../icons/notificton";
import SearchIcon from "../../icons/search";
import HomeIcon from "../../icons/homeIcon";
import ListIcon from "../../icons/listIcon";
import TagIcon from "../../icons/tagIcon";
import FolderIcon from "../../icons/folderIcon";
import UserGroupIcon from "../../icons/userGroupIcon";
import ReportIcon from "../../icons/reportIcon";
import StarIcon from "../../icons/starIcon";
import { Link } from "react-router-dom";
import DeshBodyHead from "../deshBodyHead";
import SettingIcon from "../../icons/settingIcon";
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
            <div className={styles.dwm_siderBar}>
              <div className={styles.sideBar_search}>
                <HomeIcon />
                <input type="search" placeholder="Dashboard" />
              </div>
              <Link to={"#"} className={styles.sideBar_items}>
                <ListIcon />
                <p>Orders</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <TagIcon />
                <p>Products</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <FolderIcon />
                <p>Categories</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <UserGroupIcon />
                <p>Customers</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <ReportIcon />
                <p>Reports</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <StarIcon />
                <p>Coupons</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <MessageIcon />
                <p>Inbox</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <p className={`${styles.otherinfo_setting}`}>
                  Other Information
                </p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <MessageIcon />
                <p>Knowledge Base</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <MessageIcon />
                <p>Product Updates</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <p className={`${styles.otherinfo_setting}`}>Settings</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <MessageIcon />
                <p>Personal Settings</p>
              </Link>
              <Link to={"#"} className={styles.sideBar_items}>
                <MessageIcon />
                <p>Global Settings</p>
              </Link>
              <div className={`${styles.grow_business}`}>
                <p>Grow Business</p>
                <p>
                  Explore our marketing
                  <br /> solutions
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className={styles.dwm_mainbody}>
              <DeshBodyHead
                title={"Dashboard"}
                icon={<SettingIcon />}
                btntitle={"Manage"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
