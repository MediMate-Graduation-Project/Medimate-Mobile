import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackNavigaton } from './src/navigations/StackNavigation';



function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    
      <NavigationContainer>
        <StackNavigaton />
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
 
});

export default App;
