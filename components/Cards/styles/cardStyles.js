import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
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
    padding: 28.31,
    gap: 16.71,
  },
  card_title: {
    fontFamily: "Roboto",
    fontSize: 20,
    textAlign: "center",
    color: "#222B45",
  },
  text_box: {
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#EDF1F7",
    textAlign: "left",
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 15,
  },
  text_box_placeholder: {
    fontFamily: "Roboto",
    fontSize: 18,
    textAlign: "left",
    color: "#8F9BB3",
    
  },
  card_button: {
    fontFamily: "Roboto",
    fontSize: 116,
    fontWeight: 400,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    marginTop: "2%",
  },
  subtext:{
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize:14,
    letterSpacing: 0,
    borderColor: "#EDF1F7",
    height: 30,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    width: "20%",
    backgroundColor: "#E61C38",
    color: "#FFFFFF",
    textAlign: "center",
    textAlignVertical: "center",
  },
  rowflex:{
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between", // Adjust this to distribute the elements in the row
    width: "100%", 
  },
  extended_text_box: {
    width: "80%",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0, 
  }
});
export default cardStyles;
