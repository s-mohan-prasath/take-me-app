import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState} from "react";
import styles from "./styles";

import { useTheme, Appbar } from "react-native-paper";
import {useDispatch, useSelector} from 'react-redux'
import { noteAdded } from "../../store/notes";
import {notebookListAdd} from '../../store/notebookList'
import {recentNoteListAdd} from '../../store/recentNoteList'



function NoteModal({ noteModalVisible, setNoteModalVisible,name,content}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [boldStatus,setBoldStatus] = useState('unchecked')
  const [italicStatus,setItalicStatus] = useState('unchecked')
  const dismissNoteModal = () => setNoteModalVisible(false);

  const [noteModalInputName, setNoteModalInputName] = useState(name || '');
  const [noteModalInputContent, setNoteModalInputContent] = useState(content || '');
  const [noteModalInputTag, setNoteModalInputTag] = useState("");
  
  // functions
  const saveNote = () =>{
    const id = Date.now();
    dispatch(noteAdded({id:id, name:noteModalInputName,content:noteModalInputContent}));
    dispatch(recentNoteListAdd({id:id}));
    setNoteModalInputName('');
    setNoteModalInputContent('');
    dismissNoteModal();
  }
  return (
    <>
      <Modal
        style={[styles.noteModal]}
        animationType="slide"
        transparent={false}
        visible={noteModalVisible}
        onRequestClose={dismissNoteModal}
      >
        <Appbar.Header>
          <Appbar.Content title="Take notes" />
          <Appbar.Action icon="content-save" onPress={saveNote}/>
          <Appbar.Action icon="magnify"/>
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        
        <View style={styles.modalContent}>
          <TextInput
            value={noteModalInputName}
            onChangeText={(text) => setNoteModalInputName(text)}
            style={styles.NoteModalInputTitle}
            placeholder="Title"
            transparent
            autoFocus={true}
            numberOfLines={2}
            maxLength={150}
            multiline={true}
          />
          <TextInput
            value={noteModalInputContent}
            onChangeText={(text) => setNoteModalInputContent(text)}
            placeholder="Write here..."
            style={[
              styles.ModalInput,
              styles.NoteModalInputContent,
              {
                fontWeight: boldStatus === "checked" ? "bold" : "normal",
                fontStyle: italicStatus === "checked" ? "italic" : "normal",
              },
            ]}
            multiline={true}
            numberOfLines={20}
            textAlignVertical="top"
          />
        </View>
      </Modal>
    </>
  );
}


export default NoteModal;
