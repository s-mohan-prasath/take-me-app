import * as React from "react";
import {
  BottomNavigation,
  Divider,
  Text,
  DefaultTheme,
} from "react-native-paper";

import { StyleSheet } from "react-native";

//components
import NoteNavBar from "./NoteNavBar";
import IdeaScreen from "../screens/IdeaScreen";

//configs
import {COLORS} from "../config/index";

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: NoteNavBar,
    profile: IdeaScreen,
  });

  return (
    <>
      <Divider />

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={[{ backgroundColor: COLORS.secondary }]}
        style={{elevation:20}}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.black}
        sceneAnimationEnabled={true}
        sceneAnimationType="shifting"
      />
    </>
  );
};

export default BottomNavBar;
const styles = StyleSheet.create({
  "bottom-nav-bar": {
    backgroundColor: "blue",
    height: 56,
    justifyContent: "center",
    elevation: 8,
  },
})