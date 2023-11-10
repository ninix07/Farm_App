import { View, Text } from "react-native";
import { React, useState } from "react";
import styles from "../styles/cardStyles";
import { Picker } from "@react-native-picker/picker";

const Pickerbox = ({ list, placeholder }) => {
  const [selectedName, setSelectedName] = useState(null);
  return (
    <View style={styles.text_box}>
      <Picker
        placeholder={placeholder}
        placeholderTextColor="#8F9BB3"
        selectedValue={selectedName}
        onValueChange={(itemValue, itemIndex) => setSelectedName(itemValue)}
      >
        {list.map((name, index) => (
          <Picker.Item key={index} label={name} value={name} />
        ))}
      </Picker>
    </View>
  );
};

export default Pickerbox;
