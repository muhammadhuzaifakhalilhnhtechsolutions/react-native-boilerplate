import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import Navigator from './src/router/navigator';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/Toolkit/Store';
import Wrapper from './Wrapper';

const App = () => {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <Wrapper>
            <Navigator />
          </Wrapper>
          <FlashMessage
            animationDuration={1000}
            duration={2000}
            position="top"
            animated={true}
            floating={true}
          />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
