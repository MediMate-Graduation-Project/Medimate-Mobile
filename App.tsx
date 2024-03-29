import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigation} from './src/navigations/StackNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MyDrawerNavigation} from './src/navigations/DrawerNavigation';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { AuthProvider } from './src/components/AuthContext';

const queryClient = new QueryClient();
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <StackNavigation />
          </QueryClientProvider>
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
