import React from "react";
import DatePickerCarouselItem from "./DatePickerCarouselItem";

import "./styles.module.css";
import styles from "./styles.module.css";

const DatePickerCarousel: React.FC = () => {
  return (
    <div className={styles.slider}>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem isChecked></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
        <DatePickerCarouselItem></DatePickerCarouselItem>
    </div>
  );
};
export default DatePickerCarousel;
