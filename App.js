import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login/login.js";
import Home from "./components/Home/home.js";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerTransparent: true,
            // animationTypeForReplace: "slide-vertical",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerTransparent: true,
            headerLeft: null,
            // animationTypeForReplace: "slide-vertical",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
