import StackNavigationWrapper from "./navigation/StackNavigationWrapper";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigationWrapper />
    </NavigationContainer>
  );
}
