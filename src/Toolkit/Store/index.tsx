import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashboardState from '../Slices/DashboardState/DashboardState';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['stateVisible'],
};

const ShowModal = persistReducer(persistConfig, DashboardState);

const store = configureStore({
  reducer: {
    ShowState: ShowModal,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
