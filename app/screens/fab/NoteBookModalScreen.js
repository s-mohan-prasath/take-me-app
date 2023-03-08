import { StyleSheet, View } from "react-native";
import React,{useState} from "react";
import { TextInput} from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS } from "../../config/index";

//redux import

import { useDispatch} from "react-redux";

import { tagAdded } from "../../store/tags";
import { SCREENSTYLE } from "../../styles";

export default function NoteBookModalScreen({route,navigation}) {
  const [tagName,setTagName]=useState('');
  const [tagDes,setTagDes]=useState('');
  const dispatch = useDispatch();
  const saveTag = () => {
    let id = Date.now();
    dispatch(
      tagAdded({
        id,
        name: tagModalInputName,
        desc: tagModalInputDes,
        noteList: [],
      })
    );
    setTagModalInputName("");
    setTagModalInputDes("");
  };

  return (
    <>
      <View style={[SCREENSTYLE.page]}>
        <TextInput
          label="Name"
          value={tagName}
          onChangeText={(text) => setTagName(text)}
          style={[SCREENSTYLE.text_input]}
          mode="outlined"
          placeholder=""
          activeOutlineColor={COLORS.primary}
        />
        <TextInput
          label="Description"
          value={tagDes}
          onChangeText={(text) => setTagDes(text)}
          mode="outlined"
          placeholder="give a short description..."
          style={[SCREENSTYLE.text_input]}
          activeOutlineColor={COLORS.primary}
          multiline
          numberOfLines={5}
        />
        <View style={[{width:'100%',alignItems:'center',marginVertical:'5%'}]}>
          <TouchableOpacity>
            <Icon
              name="content-save"
              size={32}
              color="black"
              onPress={saveTag}
              style={styles["saveTag"]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
