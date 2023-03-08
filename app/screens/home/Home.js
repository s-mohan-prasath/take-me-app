import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { Button, Text, FAB } from "react-native-paper";
import RNModal from "react-native-modal";
import NoteCard from "../../components/Cards/NoteCard";
// import TextEditor from '../../components/TextEditor'

// COMPONENTS
import { SCREENSTYLE, BUTTONSTYLE } from "../../styles";
import { COLORS, ROUTES } from "../../config";

export default function Home({ navigation }) {
  const [fabModalVisible, setFABModalVisible] = useState(false);
  const toggleFABModal = () => {
    setFABModalVisible(!fabModalVisible);
  };

  const FABModal = () => {
    return (
      <>
        <RNModal
          onBackdropPress={() => setFABModalVisible(false)}
          onBackButtonPress={() => setFABModalVisible(false)}
          isVisible={fabModalVisible}
          swipeDirection="down"
          onSwipeComplete={() => setFABModalVisible(!fabModalVisible)}
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={styles.FABModal}
        >
          <View style={styles.FABModalContent}>
            <View style={styles.center_align}>
              <View style={styles.FABIconBar} />
            </View>
            <Text
              variant="headlineMedium"
              style={{ textAlign: "center", marginBottom: "3%" }}
            >
              Create
            </Text>
            <View style={styles.FAB_Btn_Container}>
              <Button
                icon="note-outline"
                style={[BUTTONSTYLE.BTN_PRIMARY, { width: "48%" }]}
                labelStyle={{ color: COLORS.white }}
                onPress={() => {
                  navigation.navigate(ROUTES.NOTE_MODAL);
                  toggleFABModal();
                }}
              >
                Note
              </Button>
              <Button
                icon="tag"
                style={[BUTTONSTYLE.BTN_PRIMARY, { width: "48%" }]}
                labelStyle={{ color: COLORS.white }}
                onPress={() => {
                  navigation.navigate(ROUTES.TAG_MODAL);
                  toggleFABModal();
                }}
              >
                Tag
              </Button>
            </View>
            <Button
              icon="notebook-outline"
              style={[BUTTONSTYLE.BTN_SECONDARY, { marginTop: "2.5%" }]}
              labelStyle={{ color: COLORS.black }}
              onPress={() => {
                navigation.navigate(ROUTES.NOTEBOOK_MODAL);
                toggleFABModal();
              }}
            >
              NoteBook
            </Button>
          </View>
        </RNModal>
      </>
    );
  };
  return (
    <>
      <ScrollView>
        <View
          style={[
            SCREENSTYLE.page,
            {
              width: "100%",
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent:'space-between'
            },
          ]}
        >
          <NoteCard
            view="grid"
            title="Mohan"
            content="Mohan oie h g9ueoighew98h3498h t98 h9854 y9854 uyh98p5 uer g98r"
          />
          <NoteCard
            view="grid"
            title="Mohan"
            content="Mohan oie h g9ueoighew98h3498h t98 h9854 y9854 uyh98p5 uer g98r"
          />
        </View>
      </ScrollView>
      <FAB
        size="medium"
        mode="flat"
        icon="plus"
        style={[styles.FAB, { backgroundColor: COLORS.primary }]}
        onPress={() => setFABModalVisible(!fabModalVisible)}
        color={COLORS.white}
      />
      <FABModal />
    </>
  );
}

const styles = StyleSheet.create({
  FAB: {
    position: "absolute",
    right: "7%",
    bottom: "5%",
  },
  //FAB MODAL
  FABModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  FABModalContent: {
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 50,
    paddingBottom: 20,
  },
  FAB_Btn_Container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  FABIconBar: {
    width: 60,
    height: 5,
    backgroundColor: "#000",
    borderRadius: 3,
  },
  center_align: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4%",
  },
});

{
  /* <NoteCard
  view="grid"
  title="Mohan"
  content="Mohan oie h g9uer g98r Mandram vanthan weoith 34 80tyty3480 ty8 tyq348 iu3rhy93w4 hhy 54h98y 54h98y h54 y54 y54 yh98gy3498gy398gy 3r98 gyry98 y3498 gy398g y349g 3498 gy3498 gy34y38ygwe98ew98gf9y g9y g794 yg 7yty9834 yt9834 y98py34 yweoi thewi0 ghi hgwi hg34 hg934htgi34ahgi34tig 34oi h3i ghi0"
/>; */
}
