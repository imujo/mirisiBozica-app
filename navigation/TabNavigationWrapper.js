import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import SettingsScreen from "./tabScreens/SettingsScreen";
import AddScreen from "./tabScreens/AddScreen";
import CalendarScreen from "./tabScreens/CalendarScreen";
import { Text } from "react-native";

// Screen names
const screenNames = {
  calendar: "Calendar",
  add: "Add",
  settings: "Settings",
};

const Tab = createBottomTabNavigator();

export default function TabNavigationWrapper() {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.calendar}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          return <Text>{route.name[0]}</Text>;
        },
      })}
    >
      <Tab.Screen
        name={screenNames.calendar}
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={screenNames.add}
        component={AddScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={screenNames.settings}
        component={SettingsScreen}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
}
