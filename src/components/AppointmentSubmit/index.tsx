import React from "react";
import { IonButton, IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import styles from "./styles.module.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AppointmentSubmit: React.FC = () => {
  const {currentTime, currentSpecialistId, currentDay}  =  useTypedSelector(state => state.appointment)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className={styles.timeInfo}>
                <span>Дата</span>
                <span className={styles.timeInfoBold}>26 мая</span>
              </div>
            </IonCol>
            <IonCol>
              <div className={styles.timeInfo}>
                <span>Время</span>
                <span className={styles.timeInfoBold}>16:00</span>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton type="submit" className={styles.button}>
                записаться на бесплатную встречу
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </form>
  );
};
export default AppointmentSubmit;
