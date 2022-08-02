/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/navigations';
import {store, persistor} from './src/store';

const App = () => (
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  <AppNavigator />
  //     </PersistGate>
  //   </Provider>
);
export default App;
