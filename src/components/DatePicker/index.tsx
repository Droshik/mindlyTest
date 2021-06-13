import React from "react";
import {
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import styles from "./styles.module.css";
import daysIco from "./media/days-ico.svg";
import calendarIco from "./media/calendar-ico.svg";
import DatePickerCarousel from "./DatePickerCarousel";

const DatePicker: React.FC = () => {
  return (
    <IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol className="ion-no-padding">
          <h4>Возможная дата</h4>
        </IonCol>
        <IonCol size="3" className="ion-no-padding">
          <IonSegment className={styles.segment} value="days" mode="md">
            <IonSegmentButton value="days" className={styles.segmentBtn}>
              <IonIcon
                src={daysIco}
                className="date-picker__ico date-picker__ico_active"
              > </IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="calendar" className={styles.segmentBtn}>
              <IonIcon src={calendarIco} className="date-picker__ico"> </IonIcon>
            </IonSegmentButton>
          </IonSegment>
        </IonCol>
      </IonRow>
      <IonRow>
        <DatePickerCarousel>

        </DatePickerCarousel>
      </IonRow>
    </IonGrid>
  );
};

export default DatePicker;
