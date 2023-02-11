import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigationWrapper from "./TabNavigationWrapper";
import InputSelectScreen from "./stackScreens/InputSelectScreen/InputSelectScreen";

const Stack = createNativeStackNavigator();

export default StackNavigaitonWrapper = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={TabNavigationWrapper} />
      <Stack.Screen
        name="Select"
        component={InputSelectScreen}
        options={({ route }) => ({
          headerShown: true,
          title: route.params.header,
          headerBackVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};
