import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import ConfigScreen from "./components/ConfigScreen";
import SavingsScreen from "./components/SavingsScreen";
import UserProfileScreen from "./components/UserProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Config" component={ConfigScreen} />
        <Stack.Screen name="Savings" component={SavingsScreen} />
        <Stack.Screen name="Profile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}