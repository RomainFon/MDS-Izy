import React from 'react';
import { Provider } from 'react-redux'
import { userStore, userPersistor } from './store/configureStore'
import { PersistGate } from "redux-persist/integration/react";
import MainApp from './components/mainApp'
import LoadingScreen from './screens/loadingScreen';

// Pour info on peut mettre un écran de chargement dans le props loading le temps que les données soient récupérées du storage.
export default class App extends React.Component {
  render() {
    return (
        <Provider store={userStore}>
            <PersistGate persistor={userPersistor} loading={LoadingScreen}>
                <MainApp/>
            </PersistGate>
        </Provider>
    );
  }
}
