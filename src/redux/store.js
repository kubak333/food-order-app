import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import appReducer from './appReducer';

const store = configureStore({
  reducer: appReducer,
  devTools: true, // Włączenie narzędzi developerskich Redux
});
const persistor = persistStore(store);

export { store, persistor };