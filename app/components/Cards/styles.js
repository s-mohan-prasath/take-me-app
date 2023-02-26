import { StyleSheet} from "react-native";
export default StyleSheet.create({

    // NOTECARD STYLES.CSS

    'card-container': {
      width: "100%",
      flexDirection: "column",
      borderRadius: "5%",
      marginTop:'5% !important',
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2%",
      paddingHorizontal:'3%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    'header-left':{
     flexDirection:'row'  
    },
    footer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "1%",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopWidth: 0,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "gray",
    },
    "content-container": {
      width: "100%",
      padding: "3%",
    },
    notebook: {
      fontSize: 20,
      padding: "0.8%",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "left",
    },
    content: {
      fontSize: 16,
    },
    lastModified: {
      textAlign: "center",
      color: "#ffffff",
    },
  });