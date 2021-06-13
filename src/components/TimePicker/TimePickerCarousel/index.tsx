import React from "react";
import styles from "./styles.module.css";
import { IonSlide, IonSlides } from "@ionic/react";
import TimePickerCarouselItem from "./TimePickerCarouselItem";

const TimePickerCarousel: React.FC = () => {
  return (
    <div
      className={styles.slider}
    >
      <button className={styles.sliderItem}>
        <TimePickerCarouselItem></TimePickerCarouselItem>
      </button>
      <button className={styles.sliderItem}>
        <TimePickerCarouselItem isChecked></TimePickerCarouselItem>
      </button>
      <button className={styles.sliderItem}>
        <TimePickerCarouselItem></TimePickerCarouselItem>
      </button>
      <button className={styles.sliderItem}>
        <TimePickerCarouselItem></TimePickerCarouselItem>
      </button>
      <button className={styles.sliderItem}>
        <TimePickerCarouselItem></TimePickerCarouselItem>
      </button>
      <button className={styles.sliderItem}>
        <TimePickerCarouselItem></TimePickerCarouselItem>
      </button>
    </div>
  );
};

export default TimePickerCarousel;
