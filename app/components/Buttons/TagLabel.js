import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export default function Tag({id,name,icon,tagColor,borderRadius,tagDelete,iconColor}) {
  const deleteTag=()=>tagDelete(id);
  return (
    <View>
      <Text style={[styles["tag"], { backgroundColor: tagColor,borderRadius: borderRadius && 5}]}>
        {name}{" "}
        {icon && (
          <MaterialCommunityIcons
            name="close"
            color={iconColor || 'black'}
            onPress={deleteTag}
          />
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    padding: "2%",
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'space-between'
  },
});
