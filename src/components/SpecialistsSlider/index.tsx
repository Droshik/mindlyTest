import { IonSlides } from "@ionic/react";
import manImg from "../../assets/img/man.png";
import SpecialistsSliderItem from "./SpecialistsSliderItem";
import styles from './styles.module.css'
import classNames from "classnames";

const SpecialistsSlider: React.FC = () => {
  return (
    <>
      <IonSlides
        options={{
          direction: "horizontal",
          initialSlide: 1,
          spaceBetween: 8,
          slidesPerView: "auto",
          centeredSlides: true,
        }}

        className={classNames('ion-margin-bottom', styles.slider)}
      >
        <SpecialistsSliderItem></SpecialistsSliderItem>
        <SpecialistsSliderItem></SpecialistsSliderItem>
        <SpecialistsSliderItem></SpecialistsSliderItem>
        <SpecialistsSliderItem></SpecialistsSliderItem>
        <SpecialistsSliderItem></SpecialistsSliderItem>
        <SpecialistsSliderItem></SpecialistsSliderItem>
        <SpecialistsSliderItem></SpecialistsSliderItem>
        <SpecialistsSliderItem></SpecialistsSliderItem>
        <SpecialistsSliderItem></SpecialistsSliderItem>
      </IonSlides>
    </>
  );
};

export default SpecialistsSlider;
