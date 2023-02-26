import { StyleSheet, Text, View, Modal, ScrollView } from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../config/colors";
import Tag from "../Tag";

//redux import

import { useDispatch } from "react-redux";
import { notebookAdded } from "../../store/notebooks";
import { notebookListAdd } from "../../store/notebookList";
import { tagAdded } from "../../store/tags";

export default function NoteBookModal({
  notebookModalVisible,
  setNoteBookModalVisible,
}) {
  const dismissNoteBookModal = () => setNoteBookModalVisible(false);

  const [notebookModalInputName, setNoteBookModalInputName] = useState("");
  const [notebookModalInputDes, setNoteBookModalInputDes] = useState("");
  const [notebookModalInputTag, setNoteBookModalInputTag] = useState("");

  let [tagContainer, setTagContainer] = useState([]);

  let dispatch = useDispatch();

  const addTag = () => {
    let id = Date.now();
    setTagContainer([
      ...tagContainer,
      {
        name: notebookModalInputTag,
        id,
        desc: "Undescribed Tag",
        noteList: [],
      },
    ]);
    setNoteBookModalInputTag("");
  };
  const tagDelete = (id) => {
    const cont = tagContainer.filter((tag) => tag.id != id);
    setTagContainer(cont);
  };
  const saveNoteBook = () => {
    let id = Date.now();

    dispatch(
      notebookAdded({
        id,
        name: notebookModalInputName,
        desc: notebookModalInputDes,
        tagList: tagContainer,
        noteList: [],
      })
    );
    dispatch(notebookListAdd({ id }));
    tagContainer.map((state, key) => {
      dispatch(tagAdded(state));
    });
    setNoteBookModalInputName("");
    setNoteBookModalInputDes("");
    setNoteBookModalInputTag("");
    setTagContainer([]);
    dismissNoteBookModal();
  };

  return (
    <>
      <Modal
        style={[styles.notebookModal]}
        animationType="slide"
        transparent={false}
        visible={notebookModalVisible}
        onRequestClose={dismissNoteBookModal}
      >
        <Appbar.Header
          mode="center-aligned"
          style={{ backgroundColor: colors.secondary }}
        >
          <Appbar.Content title="Create New Notebook" />
        </Appbar.Header>
        <ScrollView>
          <View style={styles.modalContent}>
            <TextInput
              label="Name"
              value={notebookModalInputName}
              onChangeText={(text) => setNoteBookModalInputName(text)}
              style={styles.ModalInput}
              mode="outlined"
              placeholder=""
              activeOutlineColor={colors.primary}
            />
            <TextInput
              label="Description"
              value={notebookModalInputDes}
              onChangeText={(text) => setNoteBookModalInputDes(text)}
              mode="outlined"
              placeholder="give a short description..."
              style={styles.ModalInput}
              activeOutlineColor={colors.primary}
              multiline
              numberOfLines={5}
            />
            <TextInput
              label="Tags"
              value={notebookModalInputTag}
              onChangeText={(text) => setNoteBookModalInputTag(text)}
              mode="outlined"
              right={<TextInput.Icon icon="tag" />}
              placeholder="add tag.."
              style={styles.ModalInput}
              activeOutlineColor={colors.primary}
            />
            <Button
              icon="plus"
              mode="contained"
              onPress={addTag}
              style={[styles.addTagBtn, { backgroundColor: colors.primary }]}
            >
              tag
            </Button>
            <View style={styles.tagContainer}>
              <Text
                style={{
                  color: colors.white,
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: 18,
                  marginTop: "3%",
                }}
              >
                Tag Container
              </Text>
              <View
                style={[
                  styles["inner-tagContainer"],
                  { backgroundColor: colors.black },
                ]}
              >
                {tagContainer.map((props, key) => (
                  <View style={[styles["tagEncloser"]]} key={key}>
                    <Tag
                      {...props}
                      key={key}
                      iconColor={colors.black}
                      tagColor={colors.white}
                      icon="close"
                      borderRadius={true}
                      tagDelete={tagDelete}
                    />
                  </View>
                ))}
              </View>
            </View>
            <View style={[styles["wrapper-saveNoteBook"]]}>
              <MaterialCommunityIcons
                name="content-save"
                size={32}
                color="black"
                onPress={saveNoteBook}
                style={styles["saveNoteBook"]}
              />
            </View>
          </View>
        </ScrollView>
      </Modal>
    </>
  );
}
