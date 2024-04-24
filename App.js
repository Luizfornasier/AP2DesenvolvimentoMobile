import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScreen from './screens/InputScreen';
import DisplayScreen from './screens/DisplayScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{ title: 'App de exibição' }}
        />
        <Stack.Screen
          name="DisplayScreen"
          component={DisplayScreen}
          options={{ title: 'Exibição de Dados' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
