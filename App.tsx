import * as React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

import Tabs from './src/routes/tabNavigation.routes';


export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1, marginTop: getStatusBarHeight()}}>
        <Tabs />
      </View>
    </NavigationContainer>
  );
}
