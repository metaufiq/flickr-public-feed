import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import routes from './src/routes';
const Stack = createStackNavigator();
const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
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
    </QueryClientProvider>
  );
};
export default App;
