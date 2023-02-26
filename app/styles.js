import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: "15%",
    right: "9%",
    zIndex: 100,
    // borderWidth: 1,
    // borderColor: "black",
    // shadowColor:'white',
  },
  //drawer
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  drawerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 0,
  },
  navigationContainer: {
    backgroundColor: "#000",
    maxHeight: "100%",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
