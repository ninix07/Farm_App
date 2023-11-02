import { StyleSheet } from "react-native";

const waterStyles = StyleSheet.create({
  mainView: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 345,
    height: 296,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  card_title: {
    fontFamily: "Roboto",
    fontSize: 20,
    // fontWeight: 400,
    textAlign: "center",
    color: "#222B45",
  },
  text_box: {
    width: 316.69,
    borderRadius: 15,
  },
  text_box_placeholder: {
    fontFamily: "Roboto",
    fontSize: 18,
    // fontWeight: 400,
    textAlign: "left",
    color: "#8F9BB3",
  },
});
export default waterStyles;
