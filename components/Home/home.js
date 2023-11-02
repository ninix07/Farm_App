import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../assets/Profile.png"; // Import your image
import HomeStyles from "./styles/home-styles";
import { LinearGradient } from "expo-linear-gradient";
import { BackHandler } from "react-native";
import DetailCard from "../DetailCard/detailCard";
import Sunlight from "../../assets/Sunlight.png";
import Humidity from "../../assets/humidity.png";
import Male from "../../assets/Male.png";
import Water from "../../assets/water-bottle.png";
import Medicine from "../../assets/medicine.png";
import Feed from "../../assets/Feed.png";
import Egg from "../../assets/Egg.jpg";
// import Mortality from "../../assets/mortality.png";
import Temperature from "../../assets/Temperature.png";
import Weight from "../../assets/Watereight.png";
import Transfer from "../../assets/Transfer.png";
import Ventilation from "../../assets/ventilation.png";
import Vaccine from "../../assets/vaccine.png";
import Female from "../../assets/Female.png";




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
        <DetailCard ImageURL={Humidity} Title="Humidity" />
        <DetailCard ImageURL={Male} Title="Male" />
        <DetailCard ImageURL={Water} Title="Water" />
        <DetailCard ImageURL={Medicine} Title="Medicine" />
        <DetailCard ImageURL={Feed} Title="Feed" />
        <DetailCard ImageURL={Egg} Title="Egg" />
        {/* <DetailCard ImageURL={Mortality} Title="Mortality" /> */}
        <DetailCard ImageURL={Temperature} Title="Temperature" />
        <DetailCard ImageURL={Weight} Title="Weight" />
        <DetailCard ImageURL={Transfer} Title="Transfer" />
        <DetailCard ImageURL={Ventilation} Title="Ventilation" />
        <DetailCard ImageURL={Vaccine} Title="Vaccine" />
        <DetailCard ImageURL={Female} Title="Female" />


        
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
