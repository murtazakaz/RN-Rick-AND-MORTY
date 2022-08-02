import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/Home';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import colors from '../styles/colors';
import {StyleSheet} from 'react-native';
import Details from '../components/Details';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaStyle}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  safeAreaStyle: {flex: 1, backgroundColor: colors.primary},
});
