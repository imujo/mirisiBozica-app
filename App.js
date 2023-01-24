import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <View>
      <Text>Nova aplikacija!</Text>
      <StatusBar style="auto" />
      <BottomNav />
    </View>
  );
}
