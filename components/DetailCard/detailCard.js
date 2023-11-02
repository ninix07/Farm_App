import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import CardStyles from "./styles/detailCardStyles";

const DetailCard = ({ ImageURL, Title, OnPressHandler }) => {
  return (
    <LinearGradient
      colors={["rgba(157, 206, 255, 1)", "rgba(146, 163, 253, 1)"]}
      style={CardStyles.cardContainer}
    >
      <TouchableOpacity onPress={OnPressHandler} style={CardStyles.btn}>
        <Image source={ImageURL} style={CardStyles.img} resizeMode="contain" />
        <Text style={CardStyles.text}>{Title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DetailCard;
