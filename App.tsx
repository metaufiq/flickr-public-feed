import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import routes from './src/routes';
const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>

            {routes.stack.map((route, index) => (
              <Stack.Screen
                name={route.name}
                component={route.component}
                options={{
                  headerShown: false,
                }}
                key={index}
              />
            ))}
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
