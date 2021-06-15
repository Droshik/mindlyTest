import React from "react";
import styles from "./styles.module.css";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const TimePickerCarouselItem: React.FC<{time: string}> = (props) => {
  const { currentTime } = useTypedSelector((state) => state.appointment);

  const isChecked = currentTime === props.time;
  return (
    <div className={isChecked ? styles.time_active : styles.time}>
        {props.time}
    </div>
  );
};

export default TimePickerCarouselItem;
