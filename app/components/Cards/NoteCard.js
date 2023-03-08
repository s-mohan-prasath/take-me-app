import { View, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, ROUTES, SETTINGS } from "../../config/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
//components

const openModal = () => {};
const { width, height } = Dimensions.get("screen");
console.log(width, height);

export default function NoteCard(props) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    card_view: { marginRight: "1%", marginBottom: "1%", width: "100%" },
    grid_view: { padding: "1%", width: "49%" },
    card_container: {
      Width: "48%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      borderRadius: SETTINGS.CARD_BORDER_RADIUS,
      borderLeftWidth: 5,
    },
    card_body: {
      width: "100%",
      backgroundColor: "#d4d4d4",
      borderTopRightRadius: SETTINGS.CARD_BORDER_RADIUS,
      borderBottomRightRadius: SETTINGS.CARD_BORDER_RADIUS,
      padding: 10,
    },
    card_title: {
      fontWeight: "700",
      fontSize: 15,
    },
  });
  const click =()=>{
    navigation.navigate(ROUTES.NOTE_MODAL,{note_title:props.title,note_content:props.content});
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={click}>
        <View style={[props.view === "grid" ? styles.grid_view : styles.card_view,props.active && styles.card_active]}>
          <TouchableOpacity style={styles.card_container} activeOpacity={0.5}>
            <View style={[{ padding: "5%" }, styles.card_body]}>
              <Text numberOfLines={5}><Text style={styles.card_title}>{props.title}</Text>{'\n'}{props.content}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
