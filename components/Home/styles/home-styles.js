import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: "#FF0000",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
  },
  mainDetailsHeader: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 60,
    marginTop: 10,
    height: "auto",
  },
  textStyles: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19 /* 79.167% */,
    letterSpacing: 0.75,
    margin: 2,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
export default HomeStyles;
