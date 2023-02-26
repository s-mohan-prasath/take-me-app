import { View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import styles from "./styles";
import colors from "../../config/colors";

export default function NoteCard(props) {
  const iconSize = 24;

  let [pinned, setPinned] = useState(props.pinned);
  const [liked, setLiked] = React.useState(false);
  const openModal = () =>{

  }

  return (
    <>
      <View style={[styles["cardcontainer"]]}>
        <View style={[styles["header"], { backgroundColor: colors.black }]}>
          <>
            {pinned && (
              <MaterialCommunityIcons
                name="pin"
                size={iconSize}
                color="white"
              />
            )}
            <Text
              style={[styles["title"], { color: "white" }]}
              numberOfLines={1}
            >
              {props.name}
            </Text>
          </>
          <MaterialCommunityIcons
            name={liked ? "cards-heart" : "cards-heart-outline"}
            color="red"
            size={iconSize}
            onPress={()=>setLiked(!liked)}
          />
        </View>
        <TouchableRipple
          onPress={openModal}
          rippleColor="rgba(0, 0, 0, .32)"
          style={[styles["content-container"], { backgroundColor: colors.white,elevation:10}]}
        >
          <Text style={[styles.content, {}]} numberOfLines={5}>
            {props.content}
          </Text>
        </TouchableRipple>
        <View style={[styles["footer"], { backgroundColor: "black" }]}>
          <Text style={[styles["lastModified"], { color: "white" }]}>
            Last Modified on {props.lastModified || " "}
          </Text>
        </View>
      </View>
    </>
  );
}
