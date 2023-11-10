import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles/cardStyles";
import InputBox from "./utils/InputBox";
import DateElement from "./utils/dateElement";
import Pickerbox from "./utils/Pickerbox";
import ButtonContainer from "./utils/Button";

const Humidity = () => {
  const penNames = ["Pen 1", "Pen 2", "Pen 3", "Pen 4", "Pen 5"];
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.card}>
        <Text style={styles.card_title}>WEIGHT</Text>
        <DateElement />
        <Pickerbox placeholder="Pen Name" list={penNames} />
        <InputBox placeholder="Amount of Water Intake" subtext="lit/day" />
        <ButtonContainer btnText="Submit" />
      </View>
    </SafeAreaView>
  );
};

export default Humidity;
