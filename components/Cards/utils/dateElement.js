import { View, TouchableOpacity, TextInput } from "react-native";
import { React, useState } from "react";
import styles from "../styles/cardStyles";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateElement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios"); // Hide the picker on iOS after selecting a date
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };
  return (
    <View style={styles.text_box_container}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          placeholder="Date of Water Intake"
          placeholderTextColor="#FFFFFF"
          style={styles.text_box}
          value={selectedDate.toDateString()}
          editable={false} // Disable direct editing of the input
        />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default DateElement;
