import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
// import NoteCard from "../components/Cards/NoteCard";
import { Text } from "react-native-paper";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useState } from "react";

export default function HomeScreen({navigation}) {
  return (
    <><Text>Hello</Text></>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: "3%",
    paddingVertical: "3%",
    justifyContent: "space-between",
    position:'relative'
  },
  childContainer: {
    flex: 1,
    marginBottom: "2.5%",
  },
});


// let store = useSelector((state) => state);
//   const notes= store['entities']['notes'];
//   const recentNoteList = store['entities']['recentNoteList'];

//   useEffect(() => console.log("store : ",store),[store]);
//   // let isStoreEmpty = (store ===[])? true : false;
//   const [isStoreEmpty,setIsStoreEmpty] = useState(store===[]);
//   const EmptyNotesIndicator = () => (<Text style={{textAlign:'center',textAlignVertical:"center"}}>Keeping the NoteBook Empty is like keeping the Brain Empty</Text>);
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {isStoreEmpty &&  <EmptyNotesIndicator/>}
//       {/* <EmptyNotesIndicator/> */}
//       {recentNoteList.map((id,key) => (
//         <View style={styles.childContainer} key={key}>
//           <NoteCard {...notes[id]} />
//         </View>
//       ))}
//     </ScrollView>
//   );