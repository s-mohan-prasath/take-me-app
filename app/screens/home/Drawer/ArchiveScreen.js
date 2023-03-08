import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, SETTINGS } from "../../../config";
import NoteCard from "../../../components/Cards/NoteCard";

export default function ArchiveScreen() {
  const archive = useSelector((state) => state['entities']['archive']);
  console.log(archive);
  const NoArchive = () => {
    return <>
      <View style={styles.noArchiveContainer}>
        <Icon name="archive-arrow-down" size={SETTINGS.ICON_LARGE_SIZE} color={COLORS.black}/>
        <Text variant="bodyMedium">No Archive</Text>
      </View>
    </>;
  };
  const Archive = () => {
    return (
      <>
      <View style={styles.page}>
      {
        archive.map((prop,key)=>(
          <View style={styles.childContainer} key={key}>
            <NoteCard {...archive} id={archive[id]}/>
          </View>
        ))
      }
      </View>
      </>
    )
  }
  return (
    <>
    {(archive.length === 0) ? <NoArchive/> : <Archive/>}
    </>
  )
}

const styles = StyleSheet.create({
  //empty trash
  noArchiveContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noArchiveText:{
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
