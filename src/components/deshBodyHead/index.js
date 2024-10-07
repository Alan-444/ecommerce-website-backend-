import React from "react";
import styles from "./style.module.css";

const DeshBodyHead = ({ title, icon, btntitle }) => {
  return (
    <>
      <div className={`${styles.deshBodyHead}`}>
        <p className={`${styles.dbh_title}`}>{title}</p>
        <button>
          {icon}
          {btntitle}
        </button>
      </div>
    </>
  );
};

export default DeshBodyHead;
