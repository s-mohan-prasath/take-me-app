import {
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import styles from "./styles";
import React, { useState, useRef } from "react";

import { FAB, useTheme, Appbar} from "react-native-paper";

// import RNFS from 'react-native-fs';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FABModal from "./components/Modals/FABModal";
import NoteModal from "./components/Modals/NoteModal";
import NoteBookModal from "./components/Modals/NoteBookModal";
import TagModal from "./components/Modals/TagModal";
import BottomNavBar from "./components/BottomNavBar";

// configs ----------------------------------------------------------------------------------------------
import colors from './config/colors'

const screenHeight = Dimensions.get("window").height;

export default function Main() {
  const drawer = useRef(null);

  const [fabModalVisible, setFABModalVisible] = useState(false);
  const [notebookModalVisible, setNoteBookModalVisible] = useState(false);
  const [noteModalVisible, setNoteModalVisible] = useState(false);
  const [tagModalVisible, setTagModalVisible] = useState(false);

  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  const theme = useTheme();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Appbar.Header elevated={5} style={[{backgroundColor:colors.secondary}]}>
        <Appbar.Action
          icon="menu"
          onPress={() => drawer.current?.openDrawer()}
          color={colors.black}
        />
        <Appbar.Content
          title="TAKEMe"
          style={{ color: theme.colors.inverseSurface }}
          color={colors.black}
        />
        <Appbar.Action
          icon="magnify"
          onPress={() => {
            console.log("magnify");
          }}
          color={colors.black}
        />
        <Appbar.Action
          icon={MORE_ICON}
          onPress={() => {
            console.log("More Iccon");
          }}
          color={colors.black}
        />
      </Appbar.Header>
      <BottomNavBar/>
      {/* Modals */}
      <>
        <FABModal
          fabModalVisible={fabModalVisible}
          setFABModalVisible={setFABModalVisible}
          setNoteModalVisible={setNoteModalVisible}
          setNoteBookModalVisible={setNoteBookModalVisible}
          setTagModalVisible={setTagModalVisible}
        />
        <NoteModal
          noteModalVisible={noteModalVisible}
          setNoteModalVisible={setNoteModalVisible}
          name='Hello'
        />
        <NoteBookModal
          notebookModalVisible={notebookModalVisible}
          setNoteBookModalVisible={setNoteBookModalVisible}
        />
        <TagModal
          tagModalVisible={tagModalVisible}
          setTagModalVisible={setTagModalVisible}
        />
        <FAB
          size="medium"
          mode="flat"
          icon="plus"
          style={[styles.fab,{backgroundColor:colors.primary}]}
          onPress={() => setFABModalVisible(true)}
          color={colors.white}
          // barStyle={}
        />
      </>
    </>
  );
}

//
