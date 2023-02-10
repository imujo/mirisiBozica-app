import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import SettingsScreen from "./tabScreens/SettingsScreen";
import LayoutScreen from "./tabScreens/LayoutScreen";
import CalendarScreen from "./tabScreens/CalendarScreen";
import { Text } from "react-native";

// Screen names
const screenNames = {
  settings: "Settings",
  layout: "Layout",
  calendar: "Calendar",
};

const Tab = createBottomTabNavigator();

export default function TabNavigationWrapper() {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.layout}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          return <Text>{route.name[0]}</Text>;
        },
      })}
    >
      <Tab.Screen
        name={screenNames.layout}
        component={LayoutScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={screenNames.calendar}
        component={CalendarScreen}
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
