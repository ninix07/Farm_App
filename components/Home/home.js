import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../assets/Profile.png"; // Import your image
import HomeStyles from "./styles/home-styles";
import { LinearGradient } from "expo-linear-gradient";
import { BackHandler } from "react-native";
import { useEffect } from "react";
import DetailCard from "../DetailCard/detailCard";

const Home = ({ navigation }) => {
  //uncomment when no need back functionality to login
  // useEffect(() => {
  //   const handleHardwareBackPress = () => {
  //     if (navigation.isFocused()) {
  //       return true;
  //     }
  //     return false;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     handleHardwareBackPress
  //   );

  //   return () => {
  //     backHandler.remove();
  //   };
  // }, [navigation]);
  const mapdata = [
    {
      key: "Light",
      title: "Light",
      image: require("../../assets/Sunlight.png"),
    },
    {
      key: "Humidity",
      title: "Humidity",
      image: require("../../assets/humidity.png"),
    },
    { key: "Male", title: "Male", image: require("../../assets/Male.png") },
    {
      key: "Water",
      title: "Water",
      image: require("../../assets/water-bottle.png"),
    },
    {
      key: "Medicine",
      title: "Medicine",
      image: require("../../assets/medicine.png"),
    },
    { key: "Feed", title: "Feed", image: require("../../assets/Feed.png") },
    { key: "Egg", title: "Egg", image: require("../../assets/Egg.jpg") },
    {
      key: "Temperature",
      title: "Temperature",
      image: require("../../assets/Temperature.png"),
    },
    {
      key: "Weight",
      title: "Weight",
      image: require("../../assets/Weight.png"),
    },
    {
      key: "Transfer",
      title: "Transfer",
      image: require("../../assets/Transfer.png"),
    },
    {
      key: "Ventilation",
      title: "Ventilation",
      image: require("../../assets/ventilation.png"),
    },
    {
      key: "Vaccine",
      title: "Vaccine",
      image: require("../../assets/vaccine.png"),
    },
    {
      key: "Female",
      title: "Female",
      image: require("../../assets/Female.png"),
    },
  ];

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

      <View style={HomeStyles.cardContainer}>
        {mapdata.map((item) => (
          <DetailCard
            ImageURL={item.image}
            Title={item.title}
            OnPressHandler={() => {
              navigation.navigate(item.title);
            }}
            key={item.key}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
