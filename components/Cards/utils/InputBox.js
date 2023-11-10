import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "../styles/cardStyles";

const InputBox = ({ placeholder, subtext }) => {
  return (
    <View style={styles.rowflex}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#8F9BB3"
        style={[styles.text_box, styles.extended_text_box]}
      />
      <Text style={styles.subtext}>{subtext}</Text>
    </View>
  );
};

export default InputBox;
