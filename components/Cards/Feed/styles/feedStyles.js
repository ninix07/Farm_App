import { StyleSheet } from "react-native";

const feedStyles = StyleSheet.create({
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
    padding:28.31,
    gap: 16.71,
  },
  card_title: {
    fontFamily: "Roboto",
    fontSize: 20,
    textAlign: "center",
    color: "#222B45",
  },
  text_box: {
    width: "100%",
    height:30,
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
    marginTop:"2%",
    }

});
export default feedStyles;
