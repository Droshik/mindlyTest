import React, { useRef } from "react";
import styles from "./styles.module.css";
import {useActions} from "../../../../hooks/useActions";

const VOCAB:{[unit: number]: string} = {
  0: "Воскресенье",
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
};

const DatePickerCarouselItem: React.FC<{ weekDay: number; date: number; isChecked?: boolean; clickHandler: (day:Date)=>void; day:Date }> = (
  props
) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={btnRef}
      className={`${styles.carouselItem} ${props.isChecked && styles.Item_active}`}
      onClick={() => {
        btnRef.current?.scrollIntoView();
        props.clickHandler(props.day);
      }}
    >
      <span className={styles.ItemDay}>{VOCAB[props.weekDay]}</span>
      <span className={styles.ItemDate}>{props.date}</span>
    </button>
  );
};

export default DatePickerCarouselItem;
