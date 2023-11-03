import { StyleSheet } from "react-native";

const CardStyles = StyleSheet.create({
  cardContainer: {
    height: 120,
    width: 120,
    borderRadius: 22,
  },
  btn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 50,
    width: 50,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "#ffffff",
    marginTop: 5,
    fontSize: 20,
  },
});
export default CardStyles;
