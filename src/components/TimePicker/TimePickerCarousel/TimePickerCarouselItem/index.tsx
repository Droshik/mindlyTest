import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

const TimePickerCarouselItem: React.FC<{ isChecked?: boolean }> = (prop) => {
  return (
    <div
      className={prop.isChecked ? styles.time_active : styles.time}
    >
      10:00
    </div>
  );
};

export default TimePickerCarouselItem;