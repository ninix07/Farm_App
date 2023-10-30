import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#E61C38",
    gap: 20,
  },
  Breeder: {
    margin: 40,
  },
  textStyles: {
    color: "#FFFFFF",
    fontSize: 38,
    fontFamily: "Roboto",
    marginBottom: 30,
    textAlign: "center",
  },
  loginComponent: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 30,
  },
  textInput: {
    marginTop: 30,
    width: "80%",
    height: "7%",
    paddingLeft: 15,
    borderColor: "#EDF1F7",
    borderWidth: 1,
    borderRadius: 8,
  },
  btn: {
    width: "80%",
    backgroundColor: "#E61C38",
    height: "7%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 8,
  },
  textInputStyles: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Roboto",
    margin: "auto",
    textAlign: "center",
  },
});
export default LoginStyles;
