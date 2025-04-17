import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/main';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';
import {colors} from './src/constants/colors';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import RippleEffect from './src/interactions/ripple-effect/RippleEffect';
import InlineTextSwap from './src/interactions/inline-text-swap/InlineTextSwap';

export type RootStackParamList = {
  Main: undefined;
  RippleEffect: undefined;
  InlineTextSwap: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{title: 'Interaction Lab'}}
            />
            <Stack.Screen
              name="RippleEffect"
              component={RippleEffect}
              options={{title: 'Ripple Effect'}}
            />
            <Stack.Screen
              name="InlineTextSwap"
              component={InlineTextSwap}
              options={{title: 'Inline Text Swap'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
