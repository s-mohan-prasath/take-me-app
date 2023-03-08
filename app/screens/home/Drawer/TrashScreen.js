import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, SETTINGS } from "../../../config";
import NoteCard from "../../../components/Cards/NoteCard";

export default function TrashScreen() {
  const trash = useSelector((state) => state['entities']['trash']);
  console.log(trash);
  const EmptyTrash = () => {
    return <>
      <View style={styles.emptyTrashContainer}>
        <Icon name="trash-can" size={SETTINGS.ICON_LARGE_SIZE} color={COLORS.black}/>
        <Text variant="bodyMedium">Empty Trash</Text>
      </View>
    </>;
  };
  const NonEmptyTrash = () => {
    return (
      <>
      <View style={styles.page}>
      {
        trash.map((prop,key)=>(
          <View style={styles.childContainer} key={key}>
            <NoteCard {...trash} id={trash[id]}/>
          </View>
        ))
      }
      </View>
      </>
    )
  }
  return (
    <>
    {(trash.length === 0) ? <EmptyTrash/> : <NonEmptyTrash/>}
    </>
  )
}

const styles = StyleSheet.create({
  //empty trash
  emptyTrashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTrashText:{
    marginTop:'2%',
  },
  // Non Empty Trash
  page:{
    flex: 1,
    justifyContent:'flex-start',
    flexWrap:'wrap',
  },
  //noteCard
  childContainer: {
    flex: 1,
    marginBottom: "2.5%",
  },
});
