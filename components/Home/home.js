import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../assets/Profile.png"; // Import your image
import HomeStyles from "./styles/home-styles";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
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
              style={HomeStyles.image} // Specify width and height for the image
            />
          </View>
        </View>
      </LinearGradient>
      <SafeAreaView></SafeAreaView>
      {/* Not sure what you intend to do with the second SafeAreaView */}
    </ScrollView>
  );
};

export default Home;