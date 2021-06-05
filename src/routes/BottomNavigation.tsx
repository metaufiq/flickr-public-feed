import {createMaterialBottomTabNavigator, MaterialBottomTabNavigationOptions, MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import React, {ComponentClass, FunctionComponent} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../layouts/pages/Home';
import { withTheme } from 'react-native-paper';

interface BottomBarRoute {
  name: string;
  options?: MaterialBottomTabNavigationOptions;
  component: ComponentClass<any, any> | FunctionComponent<any>;
  label?: string;
  icon?:
    | string
    | ((props: {focused: boolean; color: string}) => React.ReactNode)
    | undefined;
}
const bottomBarRoute: BottomBarRoute[] = [
  {
    name: 'BottomNavigation',
    component: Home,
    label: 'Home',
    options: {
      tabBarLabel: 'Beranda',
      tabBarIcon: (icon) => (
        <Foundation name="home" color={icon.color} size={25} />
      ),
    },
  },
  {
    name: 'Favorite',
    component: Home,
    options: {
      tabBarLabel: 'Favorite',
      tabBarIcon: (icon) => (
        <AntDesign name="heart" color={icon.color} size={20} />
      ),
    },
  },
];

const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = withTheme((props) => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      backBehavior={'none'}
      barStyle={{backgroundColor: 'white'}}
      activeColor={props.theme.colors.primary}
      shifting={false}>
      {bottomBarRoute.map((route, index) => {
        return (
          <Tab.Screen
            name={route.name}
            component={route.component}
            options={route.options}
            key={index}
          />
        );
      })}
    </Tab.Navigator>
  );
});

export default BottomNavigation;