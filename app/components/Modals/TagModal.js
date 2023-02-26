import { StyleSheet, Text, View, Modal, ScrollView } from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../config/colors";

//redux import

import { useDispatch } from "react-redux";
import { notebookAdded } from "../../store/notebooks";
import { notebookListAdd } from "../../store/notebookList";
import { tagAdded } from "../../store/tags";


export default function TagModal({tagModalVisible,setTagModalVisible}){
  const dismissTagModal= () => setTagModalVisible(false);

  const [tagModalInputName, setTagModalInputName] = useState("");
  const [tagModalInputDes, setTagModalInputDes] = useState("");
  const dispatch = useDispatch();

  const saveTag =()=>{
    let id = Date.now();
    dispatch(tagAdded({id,name:tagModalInputName,desc:tagModalInputDes,noteList:[]}))
    setTagModalInputName('');
    setTagModalInputDes('');
    dismissTagModal();
  }

    return (
        <>
            <Modal
        style={[styles.notebookModal]}
        animationType="slide"
        transparent={false}
        visible={tagModalVisible}
        onRequestClose={dismissTagModal}
      >
        <Appbar.Header
          mode="center-aligned"
          style={{ backgroundColor: colors.secondary }}
        >
          <Appbar.Content title="Create New Tag" />
        </Appbar.Header>
        <ScrollView>
          <View style={styles.modalContent}>
            <TextInput
              label="Name"
              value={tagModalInputName}
              onChangeText={(text) => setTagModalInputName(text)}
              style={styles.ModalInput}
              mode="outlined"
              placeholder=""
              activeOutlineColor={colors.primary}
            />
            <TextInput
              label="Description"
              value={tagModalInputDes}
              onChangeText={(text) => setTagModalInputDes(text)}
              mode="outlined"
              placeholder="give a short description..."
              style={styles.ModalInput}
              activeOutlineColor={colors.primary}
              multiline
              numberOfLines={5}
            />
            <View style={[styles["wrapper-saveNoteBook"]]}>
              <MaterialCommunityIcons
                name="content-save"
                size={32}
                color="black"
                onPress={saveTag}
                style={styles["saveTag"]}
              />
            </View>
          </View>
        </ScrollView>
      </Modal>
        </>
    )
}
