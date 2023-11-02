import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../assets/Profile.png"; // Import your image
import HomeStyles from "./styles/home-styles";
import { LinearGradient } from "expo-linear-gradient";
import { BackHandler } from "react-native";
import DetailCard from "../DetailCard/detailCard";
import Sunlight from "../../assets/Sunlight.png";

const Home = () => {
  const onBackPress = () => {
    // Prevent going back by returning true (disabling the back action).
    return true;
  };

  // Add a back button listener when the screen is focused.
  BackHandler.addEventListener("hardwareBackPress", onBackPress);
  return (
    <ScrollView>
      <LinearGradient
        colors={[
          "rgba(255, 0, 0, 0.78)",
          "rgba(203, 64, 131, 1)",
          "rgba(133, 62, 62, 1)",
        ]}
        end={{ x: 0.35, y: 1 }}
        locations={[0.3, 0.5, 0.99]}
        style={HomeStyles.detailsContainer}
      >
        <View>
          <Text style={HomeStyles.mainDetailsHeader}>Details</Text>
        </View>
        <View style={HomeStyles.details}>
          <View>
            <Text style={HomeStyles.textStyles}>Supervisor Name</Text>
            <Text style={HomeStyles.textStyles}>Flock No</Text>
            <Text style={HomeStyles.textStyles}>House</Text>
            <Text style={HomeStyles.textStyles}>Current Week</Text>
          </View>

          <View>
            <Image
              source={Profile} // Use the imported image as the source
              style={HomeStyles.image}
              resizeMode="contain" // Specify width and height for the image
            />
          </View>
        </View>
      </LinearGradient>
      <SafeAreaView>
        <DetailCard ImageURL={Sunlight} Title="Sunlight" />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
