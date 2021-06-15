import { IonApp, IonContent, IonLoading } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/cuctom_typography.css";

/* App components */
import SpecialistsSlider from "./components/SpecialistsSlider";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import FormContainer from "./components/FormContainer";

const App: React.FC = () => {
  const { getSpecialists } = useActions();
  const { isLoading } = useTypedSelector((state) => state.specialist);

  useEffect(() => {
    getSpecialists();
  }, []);

  return (
    <IonApp style={{ maxWidth: 500, margin: "0 auto" }}>
      <IonContent className="ion-padding">
        {!isLoading  && (
          <>
            <SpecialistsSlider />
            <FormContainer/>
          </>
        )}
      </IonContent>
    </IonApp>
  );
};

export default App;
