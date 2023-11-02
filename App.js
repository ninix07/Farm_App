import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login/login.js";
import Home from "./components/Home/home.js";
import "react-native-gesture-handler";
import Water from "./components/Cards/water.js";
import Male from "./components/Cards/male.js";
import Light from "./components/Cards/light.js";
import Humidity from "./components/Cards/humidity.js";
import Medicine from "./components/Cards/medicine.js";
import Feed from "./components/Cards/feed.js";
import Egg from "./components/Cards/egg.js";
import Temperature from "./components/Cards/temperature.js";
import Weight from "./components/Cards/weight.js";
import Transfer from "./components/Cards/transfer.js";
import Ventilation from "./components/Cards/ventilation.js";
import Vaccine from "./components/Cards/vaccine.js";
import Female from "./components/Cards/female.js";
import { createStackNavigator } from "@react-navigation/stack";
import { BackHandler } from "react-native";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Group
          screenOptions={{
            headerTitle: "",
            headerShadowVisible: false,
            headerTransparent: true,
            headerLeft: null,
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerTransparent: true,
              animationTypeForReplace: "slide-vertical",
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
              animationTypeForReplace: "slide-vertical",
            }}
          />
          <Stack.Group
            screenOptions={{
              presentation: "transparentModal",
              cardOverlayEnabled: true,
            }}
          >
            <Stack.Screen name="Water" component={Water} />
            <Stack.Screen name="Light" component={Light} />
            <Stack.Screen name="Male" component={Male} />
            <Stack.Screen name="Medicine" component={Medicine} />
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Egg" component={Egg} />
            <Stack.Screen name="Temperature" component={Temperature} />
            <Stack.Screen name="Weight" component={Weight} />
            <Stack.Screen name="Transfer" component={Transfer} />
            <Stack.Screen name="Ventilation" component={Ventilation} />
            <Stack.Screen name="Vaccine" component={Vaccine} />
            <Stack.Screen name="Humidity" component={Humidity} />
            <Stack.Screen name="Female" component={Female} />
          </Stack.Group>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
