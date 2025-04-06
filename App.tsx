import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/main';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {colors} from './src/constants/colors';
import RippleEffect from './src/interactions/RippleEffect';

export type RootStackParamList = {
  Main: undefined;
  RippleEffect: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <SafeAreaView style={styles.container}>
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
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
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
