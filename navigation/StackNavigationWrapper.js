import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigationWrapper from "./TabNavigationWrapper";
import Event from "./stackScreens/Event";
import { Text } from "react-native";
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
        name="Event"
        component={Event}
        options={({ route }) => ({
          headerShown: true,

          title: route.params.header,
          // headerRight: () => {
          //   switch (route.params.type) {
          //     case "view":
          //       return <Text>Edit</Text>;
          //     default:
          //       break;
          //   }
          // },
        })}
      />
    </Stack.Navigator>
  );
};
