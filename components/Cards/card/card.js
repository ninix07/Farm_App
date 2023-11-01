import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Card = ({ name, formFields }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{name}</Text>
      {formFields.map((field, index) => (
        <TextInput
          key={index}
          style={styles.formField}
          placeholder={field.label}
        />))}
    </View>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    elevation: 3, // Add shadow for an elevated effect
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  formField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
};

export default Card;


//to use this card component in App.js 
{/* import React from 'react';
import { View } from 'react-native';
import Card from './Card';

const App = () => {
  const cardData = [
    {
      name: 'Card 1',
      formFields: [{ label: 'Field 1' }, { label: 'Field 2' }],
    },
    {
      name: 'Card 2',
      formFields: [{ label: 'Field 3' }, { label: 'Field 4' }, { label: 'Field 5' }],
    },
  ];

  return (
    <View>
      {cardData.map((card, index) => (
        <Card key={index} name={card.name} formFields={card.formFields} />
      )}
    </View>
  );
};

export default App; */}
