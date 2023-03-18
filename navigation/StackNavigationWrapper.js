import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigationWrapper from "./TabNavigationWrapper";
import InputSelectScreen from "./stackScreens/InputSelectScreen/InputSelectScreen";

import AddAktivnostiScreen from "./stackScreens/AddAktivnostiScreen";
import AddApartmentScreen from "./stackScreens/AddApartmentScreen";
import AddOstaloScreen from "./stackScreens/AddOstaloScreen";
import AddRestaurantScreen from "./stackScreens/AddRestaurantScreen";

const Stack = createNativeStackNavigator();

export default StackNavigaitonWrapper = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabNavigationWrapper}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Select"
        component={InputSelectScreen}
        options={({ route }) => ({
          title: route.params.header,
          headerBackVisible: false,
          headerTitleAlign: "center",
        })}
      />
      <Stack.Group
        screenOptions={{
          headerBackVisible: false,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="AddRestaurantScreen"
          component={AddRestaurantScreen}
        />
        <Stack.Screen name="AddOstaloScreen" component={AddOstaloScreen} />
        <Stack.Screen
          name="AddAktivnostiScreen"
          component={AddAktivnostiScreen}
        />
        <Stack.Screen
          name="AddApartmentScreen"
          component={AddApartmentScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
