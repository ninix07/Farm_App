import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles/transferStyles";
import DateTimePicker from "@react-native-community/datetimepicker";

const Transfer = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date
  const [selectedPenName, setSelectedPenName] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const penNames = ["Pen 1", "Pen 2", "Pen 3", "Pen 4", "Pen 5"];

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios"); // Hide the picker on iOS after selecting a date
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.card}>
        <Text style={styles.card_title}>Water</Text>

        {/* Date of Water Intake (DatePicker) */}
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            placeholder="Date of Water Intake"
            placeholderTextColor="#8F9BB3"
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

        {/* Pen Name (Dropdown Picker) */}
        <View style={styles.text_box} >
        <Picker
          selectedValue={selectedPenName}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPenName(itemValue)
        }
        >
          {penNames.map((name, index) => (
              <Picker.Item key={index} label={name} value={name} />
              ))}
        </Picker>
        </View>

        <TextInput
          placeholder="Amount of Water Intake"
          placeholderTextColor="#8F9BB3"
          style={styles.text_box}
        />

        <View style={styles.card_button}>
        <Button
        title="Submit"
        color="#E61C38"
        />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Transfer;
