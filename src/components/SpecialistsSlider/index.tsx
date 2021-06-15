import { IonSlides } from "@ionic/react";

import SpecialistsSliderItem from "./SpecialistsSliderItem";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect, useRef } from "react";
import { useActions } from "../../hooks/useActions";

const SpecialistsSlider: React.FC = () => {
  const slider = useRef<HTMLIonSlidesElement>(null);

  const { specialists } = useTypedSelector((state) => state.specialist);

  const selectedSpecialist = useTypedSelector(
    (state) => state.appointment.currentSpecialistId
  );
  const { selectSpecialist} = useActions();
  useEffect(() => {
    if (slider !== null) {
      //check if slider ready
      slider.current!.getActiveIndex().then(() => {
        selectSpecialist(specialists[0].id);
      });
    }
  }, []);

  if (!specialists.length) {
    return (
      <>
        <h2>Тут никого(</h2>
      </>
    );
  }
  return (
    <>
      <IonSlides
        ref={slider}
        options={{
          direction: "horizontal",
          initialSlide: selectedSpecialist,
          spaceBetween: 8,
          slidesPerView: "auto",
          centeredSlides: true,
          on: {
            slideChange: () => {
              if (slider) {
                slider.current!.getActiveIndex().then((index) => {
                  selectSpecialist(specialists[index].id);
                });
              }
            },
          },
        }}
        className={classNames("ion-margin-bottom", styles.slider)}
      >
        {specialists.map((person) => {
          return (
            <SpecialistsSliderItem
              key={person.id}
              name={person.name}
              time={person.consultationTime}
            />
          );
        })}
      </IonSlides>
    </>
  );
};

export default SpecialistsSlider;
