import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast data={toast} handleClose={handleCloseToast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
