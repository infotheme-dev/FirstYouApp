const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import ChooseServiceType from "./screens/ChooseServiceType";
import AboutGeneralProfile from "./screens/AboutGeneralProfile";
import ChooseAccountType from "./screens/ChooseAccountType";
import OTPScreen from "./screens/OTPScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Barlow: require("./assets/fonts/Barlow.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseServiceType"
              component={ChooseServiceType}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutGeneralProfile"
              component={AboutGeneralProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseAccountType"
              component={ChooseAccountType}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPScreen"
              component={OTPScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
