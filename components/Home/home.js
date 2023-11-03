import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../assets/Profile.png"; // Import your image
import HomeStyles from "./styles/home-styles";
import { LinearGradient } from "expo-linear-gradient";
import { BackHandler } from "react-native";
import { useEffect } from "react";
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
import Weight from "../../assets/Weight.png";
import Transfer from "../../assets/Transfer.png";
import Ventilation from "../../assets/ventilation.png";
import Vaccine from "../../assets/vaccine.png";
import Female from "../../assets/Female.png";

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
        <DetailCard
          ImageURL={Sunlight}
          Title="Light"
          OnPressHandler={() => {
            navigation.navigate("Light");
          }}
        />
        <DetailCard
          ImageURL={Humidity}
          Title="Humidity"
          OnPressHandler={() => {
            navigation.navigate("Humidity");
          }}
        />
        <DetailCard
          ImageURL={Male}
          Title="Male"
          OnPressHandler={() => {
            navigation.navigate("Male");
          }}
        />
        <DetailCard
          ImageURL={Water}
          Title="Water"
          OnPressHandler={() => {
            navigation.navigate("Water");
          }}
        />
        <DetailCard
          ImageURL={Medicine}
          Title="Medicine"
          OnPressHandler={() => {
            navigation.navigate("Medicine");
          }}
        />
        <DetailCard
          ImageURL={Feed}
          Title="Feed"
          OnPressHandler={() => {
            navigation.navigate("Feed");
          }}
        />
        <DetailCard
          ImageURL={Egg}
          Title="Egg"
          OnPressHandler={() => {
            navigation.navigate("Egg");
          }}
        />
        {/* <DetailCard ImageURL={Mortality} Title="Mortality" /> */}
        <DetailCard
          ImageURL={Temperature}
          Title="Temperature"
          OnPressHandler={() => {
            navigation.navigate("Temperature");
          }}
        />
        <DetailCard
          ImageURL={Weight}
          Title="Weight"
          OnPressHandler={() => {
            navigation.navigate("Weight");
          }}
        />
        <DetailCard
          ImageURL={Transfer}
          Title="Transfer"
          OnPressHandler={() => {
            navigation.navigate("Transfer");
          }}
        />
        <DetailCard
          ImageURL={Ventilation}
          Title="Ventilation"
          OnPressHandler={() => {
            navigation.navigate("Ventilation");
          }}
        />
        <DetailCard
          ImageURL={Vaccine}
          Title="Vaccine"
          OnPressHandler={() => {
            navigation.navigate("Vaccine");
          }}
        />
        <DetailCard
          ImageURL={Female}
          Title="Female"
          OnPressHandler={() => {
            navigation.navigate("Female");
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
