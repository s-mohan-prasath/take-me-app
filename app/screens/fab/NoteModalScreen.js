import {
  View,
  TextInput,StyleSheet,ScrollView
} from "react-native";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { noteAdded } from "../../store/notes";
import { recentNoteListAdd } from "../../store/recentNoteList";
import { SCREENSTYLE } from "../../styles";
import { useRoute,useNavigation } from "@react-navigation/native";
import { SETTINGS } from "../../config";

export default function NoteModalScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const note_title = route.params?.note_title;
  const note_content = route.params?.note_content;

  const [title, setTitle] = useState(props.note_title || note_title || "");
  const [content, setContent] = useState(
    props.note_content || note_content || ""
  );
  // functions
  const saveNote = () => {
    const id = Date.now();
    dispatch(
      noteAdded({
        id: id,
        name: title,
        content: content
      })
    );
    dispatch(recentNoteListAdd({ id: id }));
    setTitle("");
    setContent("");
  };
  return (
    <>
      <ScrollView>
        <View style={SCREENSTYLE.page}>
            <TextInput
              value={title}
              onChangeText={(text) => setTitle(text)}
              style={[styles.title]}
              placeholder="Title"
              transparent
              maxLength={150}
              multiline
              />
            <TextInput
              value={content}
              onChangeText={(text) => setContent(text)}
              placeholder="Write here..."
              autoFocus={true}
              style={[
                styles.content,
              ]}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
          </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: SETTINGS.TEXT_TITLE_NOTES,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    fontWeight: "700",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
  },
  content: {
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: "5%",
  }
});
