import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Portal, Dialog, Button } from "react-native-paper";

//config
import colors from "../../config/colors";

export default function FABModal({
  fabModalVisible,
  setFABModalVisible,
  setNoteModalVisible,
  setNoteBookModalVisible,
  setTagModalVisible,
}) {
  const dismissFABModal = () => setFABModalVisible(false);
  const openNoteModal = () => {
    dismissFABModal();
    setNoteModalVisible(true);
  };
  const openNoteBookModal = () => {
    dismissFABModal();
    setNoteBookModalVisible(true);
  };
  const openTagModal = () => {
    dismissFABModal();
    setTagModalVisible(true);
  };
  const closeNoteModal = () => setNoteModalVisible(false);
  const closeNoteBookModal = () => setNoteBookModalVisible(false);
  const closeTagModal = () => setTagModalVisible(false);

  return (
    <Portal>
      <Dialog visible={fabModalVisible} onDismiss={dismissFABModal}>
        <Dialog.Title>Create</Dialog.Title>
        <Dialog.Content>
          <View>
            <View style={styles.btnContainerFAB}>
              <Button
                icon="note-outline"
                mode="contained"
                style={[styles['btn-primary'],{backgroundColor:colors.primary}]}
                onPress={openNoteModal}
              >
                Note
              </Button>
              <Button
                icon="tag"
                mode="contained"
                style={[styles['btn-primary'],{backgroundColor:colors.primary}]}
                onPress={openTagModal}
              >
                Tag
              </Button>
            </View>
            <Button
              icon="notebook-outline"
              mode="contained"
              onPress={openNoteBookModal}
              style={[styles['btn-secondary'],{backgroundColor:colors.secondary,color:colors.black}]}
              textColor={colors.black}
            >
              NoteBook
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}
