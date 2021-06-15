import React, { useEffect } from "react";
import styles from "./styles.module.css";
import TimePickerCarouselItem from "./TimePickerCarouselItem";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import {connect} from "react-redux";

const TimePickerCarousel: React.FC = () => {
  const id = useTypedSelector((state) => state.appointment.currentSpecialistId);

  const currentSpecialist = useTypedSelector((state) =>
    state.specialist.specialists.find((spec) => spec.id === id)
  );
  const { currentTime } = useTypedSelector((state) => state.appointment);

  const { currentDay } = useTypedSelector((state) => state.appointment);

  const hours = currentSpecialist!.workingHours;

  //the function is designed so that the start time and end time have the same value of minutes
  const calcWorkHours = (
    hours: { start: string; end: string },
    currentDay: Date | null
  ): string[] => {
    const endTime = hours.end;
    let startTime = hours.start.split(":");

    //to not show unavailable time
    const today = new Date();
    let isToday: boolean = false;
    if (currentDay !== null) {
      isToday =
        currentDay.getDate() == today.getDate() &&
        currentDay.getMonth() == today.getMonth() &&
        currentDay.getFullYear() == today.getFullYear();
    }

    //crop too early time today
    if (isToday) {
      startTime[0] = ("0" + (today.getHours() + 2)).slice(-2);
    }

    const times = [];
    let startTimeForLoop = Number(startTime[0]) * 60 + Number(startTime[1]);
    //time in slider available every step minutes
    const step = 30;
    const iterations = (24 * 60) / step;

    for (let i = 0; i < iterations; i++) {
      const hours = Math.floor(startTimeForLoop / 60);
      const minutes = startTimeForLoop % 60;
      const time =
        ("0" + (hours % 24)).slice(-2) + ":" + ("0" + minutes).slice(-2);
      startTimeForLoop = startTimeForLoop + 30;

      if (time === endTime) {
        break;
      }

      times.push(time);
    }
    return times;
  };

  const times: string[] = calcWorkHours(hours, currentDay);

  const { selectTime } = useActions();
  const clickHandler = (time: string) => {
    selectTime(time);
  };

  // if (currentTime === null) {
  //   selectTime(times[0]);
  // } else if (times.includes(currentTime)) {
  //   selectTime(times[0]);
  // }

  useEffect(() => {
        selectTime(times[0]);
        console.log('dasdas')
      }
  , []);

  return (
    <div className={styles.slider}>
      {times.length &&
        times.map((time: string, index) => {
          return (
            <button
              className={styles.sliderItem}
              onClick={() => {
                clickHandler(time);
              }}
            >
              <TimePickerCarouselItem time={time} key={index} />
            </button>
          );
        })}
    </div>
  );
};

export default TimePickerCarousel;
