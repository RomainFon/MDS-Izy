import { createStore } from 'redux';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import {persistStore} from "redux-persist";
import createEncryptor from 'redux-persist-transform-encrypt';

import user from './reducers/userReducer'

//Fonction de cryptage des données stockées
const encryptor = createEncryptor({
    secretKey: "s1nG3m0T0",
    onError: error => {
        console.error(error);
    }
});

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user'], //Mettre le nom des reducers à persister ici
    transforms: [encryptor]
};

//Mettre les autres reducers ici
const rootReducer = persistReducer(persistConfig, combineReducers({
    user: user,
}));

let userStore = createStore(rootReducer);
let userPersistor = persistStore(userStore);

export { userStore, userPersistor };