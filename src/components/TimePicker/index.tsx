import React from "react";
import {IonCol, IonGrid, IonRow} from "@ionic/react";
import TimePickerCarousel from "./TimePickerCarousel";

const TimePicker: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol  className="ion-no-padding">
                    <h4>Свободное время</h4>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <TimePickerCarousel></TimePickerCarousel>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}
export default TimePicker;
