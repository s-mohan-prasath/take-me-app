import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

//component
import NoteCard from "../Cards/NoteCard";
import { useState,useEffect } from "react";

export default function RecentNotesTab() {
  let store = useSelector((state) => state);
  const notes = store["entities"]["notes"];
  const recentNoteList = store["entities"]["recentNoteList"];

    useEffect(()=>(console.log(store)),[store]);

  return (
    <View>
      <>
        {recentNoteList.map((id, key) => (
          <View style={styles.childContainer} key={key}>
            <NoteCard {...notes[id]} id={id}/>
          </View>
        ))}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: "3%",
    paddingVertical: "3%",
    justifyContent: "space-between",
    position: "relative",
    top:0,
    left:0,
  },
  childContainer: {
    flex: 1,
    marginBottom: "2.5%",
  },
});
