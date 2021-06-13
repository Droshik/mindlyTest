import {IonApp, IonContent} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/cuctom_typography.css';

import SpecialistsSlider from "./components/SpecialistsSlider";
import DatePicker from "./components/DatePicker";
import TimePicker from "./components/TimePicker";
import AppointmentSubmit from "./components/AppointmentSubmit";

const App: React.FC = () => (
  <IonApp>
      <IonContent className='ion-padding'>
          <SpecialistsSlider></SpecialistsSlider>
          <DatePicker></DatePicker>
          <TimePicker></TimePicker>
          <AppointmentSubmit></AppointmentSubmit>
      </IonContent>
  </IonApp>
);

export default App;
