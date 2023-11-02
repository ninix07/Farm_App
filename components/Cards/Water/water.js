import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import waterstyles from '../Water/styles/water.css';
import DateTimePicker from '@react-native-datetimepicker/datetimepicker';

const Water = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date
  const [selectedPenName, setSelectedPenName] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const penNames = ['Pen 1', 'Pen 2', 'Pen 3', 'Pen 4', 'Pen 5'];

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Hide the picker on iOS after selecting a date
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  return (
    <SafeAreaView>
      <View style={waterstyles.card}>
        <Text style={waterstyles.card_title}>Water</Text>

        {/* Date of Water Intake (DatePicker) */}
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            placeholder="Date of Water Intake"
            placeholderTextColor="#8F9BB3"
            style={waterstyles.text_box}
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
        <Picker
          selectedValue={selectedPenName}
          style={waterstyles.text_box}
          onValueChange={(itemValue, itemIndex) => setSelectedPenName(itemValue)}>
          {penNames.map((name, index) => (
            <Picker.Item key={index} label={name} value={name} />
          ))}
        </Picker>

        <TextInput
          placeholder="Amount of Water Intake"
          placeholderTextColor="#8F9BB3"
          style={waterstyles.text_box}
        />
      </View>
    </SafeAreaView>
  );
};

export default Water;
