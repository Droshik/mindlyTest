import React from "react";
import DatePickerCarouselItem from "./DatePickerCarouselItem";

import "./styles.module.css";
import styles from "./styles.module.css";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

const DatePickerCarousel: React.FC = () => {
  const selectedDay = useTypedSelector((state) => state.appointment.currentDay);

  const { selectDay, selectTime } = useActions();

  const clickHandler = (day: Date) => {
    selectDay(day);
    selectTime('');
  };
  const id = useTypedSelector((state) => state.appointment.currentSpecialistId);

  const currentSpecialist = useTypedSelector((state) =>
    state.specialist.specialists.find((spec) => spec.id === id)
  );
  const DAYS_LIMIT: number = 10;
  const workDaysArr: number[] = currentSpecialist!.workingDays;
  const calcDays = (workDays: number[]): Date[] => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const dateArr = [];
    for (let i = dateArr.length; dateArr.length < DAYS_LIMIT; i++) {
      const day = new Date(year, month, date + i);
      if (workDays.includes(day.getDay())) {
        dateArr.push(day);
      }
    }
    return dateArr;
  };

  const daysArr = calcDays(workDaysArr);

  //select first available day from work days
  if (!selectedDay) {
    if (daysArr) {
      selectDay(daysArr[0]);
    }
  }

  return (
    <div className={styles.slider}>
      {!daysArr?.length ? (
        <>не срослось(</>
      ) : (
        daysArr.map((day) => {
          let isChecked = false;
          if (day.getDate() === selectedDay?.getDate()) {
            isChecked = true;
          }

          return (
            <DatePickerCarouselItem
              key={day.toDateString()}
              date={day.getDate()}
              weekDay={day.getDay()}
              isChecked={isChecked}
              day={day}
              clickHandler={clickHandler}
            />
          );
        })
      )}
    </div>
  );
};

export default DatePickerCarousel;
// connect((state: any) => {
// return {state: state.appointment.currentDay}
// })(DatePickerCarousel);
