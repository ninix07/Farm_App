import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/cardStyles";
const ButtonContainer = ({ btnText }) => {
  return (
    <TouchableOpacity style={styles.card_button}>
      <Text style={styles.button_text}>{btnText} </Text>
    </TouchableOpacity>
  );
};

export default ButtonContainer;
