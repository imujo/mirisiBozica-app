import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigationWrapper from "./navigation/StackNavigationWrapper";
import TabNavigationWrapper from "./navigation/TabNavigationWrapper";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigationWrapper />
    </NavigationContainer>
  );
}
