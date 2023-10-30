import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Hen from "../../assets/Hen.png";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginStyles from "./styles/login-style.js";
import BiRightArrowCircle from "react-icons/bi";

const Login = ({ navigation }) => {
  const checkAuth = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={LoginStyles.mainContainer}>
      <View style={LoginStyles.Breeder}>
        <Text style={LoginStyles.textStyles}>Breeder {"\n"}Application</Text>
        <Image source={Hen} />
      </View>
      <View style={LoginStyles.loginComponent}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#8F9BB3"
          style={LoginStyles.textInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#8F9BB3"
          style={LoginStyles.textInput}
        />

        <TouchableOpacity style={LoginStyles.btn} onPress={checkAuth}>
          <Text style={LoginStyles.textInputStyles}>Login </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
