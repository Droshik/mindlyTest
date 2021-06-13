import React from "react";
import classNames from "classnames";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonItem,
  IonRow,
  IonSlide,
  IonText,
} from "@ionic/react";
import "./styles.module.css";
import styles from "./styles.module.css";
import manImg from "../../../assets/img/man.png";

const SpecialistsSliderItem: React.FC = () => {
  return (
    <IonSlide>
      <IonCard className={classNames("ion-no-margin", styles.card)}>
        <IonCardHeader className="ion-no-padding">
          <IonCardTitle
            className={classNames("ion-text-center", styles.header)}
          >
            <h2>Его Имя</h2>
          </IonCardTitle>
        </IonCardHeader>
        <IonItem className={styles.content} lines="none">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <img src={manImg} className={styles.img} />
              </IonCol>
              <IonCol size="6" className={styles.info}>
                <IonRow>
                  <IonText className="ion-text-center" color="medium">
                    Длительность консультации
                  </IonText>
                </IonRow>
                <IonRow>
                  <IonText className="ion-justify-content-center">
                    <h3>50 минут</h3>
                  </IonText>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonCard>
    </IonSlide>
  );
};

export default SpecialistsSliderItem;
