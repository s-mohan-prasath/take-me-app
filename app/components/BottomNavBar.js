import * as React from "react";
import {
  BottomNavigation,
  Divider,
  Text,
  DefaultTheme,
} from "react-native-paper";

import { StyleSheet } from "react-native";
import styles from "../styles";

//components
import HomeScreen from "../screens/HomeScreen";
import IdeaScreen from "../screens/IdeaScreen";

//configs
import colors from "../config/colors";

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
    home: HomeScreen,
    profile: IdeaScreen,
  });

  return (
    <>
      <Divider />

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={[{ backgroundColor: colors.secondary }]}
        style={{elevation:20}}
        activeColor={colors.primary}
        inactiveColor={colors.black}
        sceneAnimationEnabled={true}
        sceneAnimationType="shifting"
      />
    </>
  );
};

export default BottomNavBar;
