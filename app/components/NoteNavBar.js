import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { TouchableRipple, Text } from "react-native-paper";
import { useState } from "react";
import RecentNotesTab from "./Tabs/RecentNotesTab";
import StarredNotesTab from "./Tabs/StarredNotesTab";
import {COLORS} from "../config/index";
import HomeScreen from "../screens/HomeScreen";
import Dummy1 from "../screens/Dummy1";

export default function NoteNavBar(props) {
  const [activeTab, setActiveTab] = useState("recent");

  // const tabPress = () => {};
  // return (
  //   <>
  //     <View style={[styles["nav-bar"]]}>
  //       <TouchableRipple
  //         style={[
  //           styles["tab"],
  //           styles[`${activeTab === "recent" ? "active-tab" : "inactive-tab"}`],
  //         ]}
  //         onPress={() => setActiveTab("recent")}
  //         rippleColor={colors.secondary}
  //       >
  //         <Text
  //           style={[
  //             styles[
  //               `${activeTab === "recent" ? "active-text" : "inactive-text"}`
  //             ],
  //           ]}
  //         >
  //           Recent Notes
  //         </Text>
  //       </TouchableRipple>
  //       <TouchableRipple
  //         style={[
  //           styles["tab"],
  //           styles[
  //             `${activeTab === "starred" ? "active-tab" : "inactive-tab"}`
  //           ],
  //         ]}
  //         onPress={() => setActiveTab("starred")}
  //         rippleColor={colors.secondary}
  //       >
  //         <Text
  //           style={[
  //             styles[
  //               `${activeTab === "starred" ? "active-text" : "inactive-text"}`
  //             ],
  //           ]}
  //         >
  //           Starred Notes
  //         </Text>
  //       </TouchableRipple>
  //     </View>
  //     <ScrollView style={[styles["screen-container"]]}>
  //       <View style={styles["screen"]}>
  //         {activeTab === "recent" && <RecentNotesTab />}
  //         {activeTab === "starred" && <StarredNotesTab />}
  //       </View>
  //     </ScrollView>
  //   </>
  // );
  return(
    <>
    <Dummy1/>
    </>
  )
}

const styles = StyleSheet.create({
  "nav-bar": {
    width: "100%",
    flexDirection: "row",
    height: "9%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  "screen-container": {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: "3%",
    paddingVertical: "3%",
    position:'relative'
  },
  screen: {
    width: "100%",
  },
  tab: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  "active-tab": {
    borderBottomColor: "#000080",
    borderBottomWidth: 2,
  },
  "active-text": {
    color: "#000080",
    fontSize: 18,
  },
  "inactive-text": {
    color: "#4d4949",
    fontSize: 16,
  },
  "inactive-tab": {
    borderBottomWidth: 0,
  },
});
