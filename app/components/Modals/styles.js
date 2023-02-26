import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  // NoteBook Modal
  ModalInput: { marginTop: "5%", backgroundColor: "white" },
  modalContent: {
    width: "100%",
    paddingHorizontal: "5%",
  },
  // NoteBook Modal
  NoteModalInputTitle: {
    fontSize: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    fontWeight: "700",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
  },
  tagContainer: {
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  "inner-tagContainer": {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "4%",
    borderRadius: 10,
  },
  tagEncloser: { marginTop: "1.5%", marginLeft: "1.5%" },
  addTagBtn: {
    alignSelf: "flex-end",
    marginVertical: "5%",
  },
  "btn-primary": {
    width: "48%",
  },
  "btn-secondary": {
    color: "black",
  },
  "wrapper-saveNoteBook": {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  saveNoteBook: {
    marginTop: "5%",
  },
  saveTag:{
    marginTop:'5%',
  },
  //NoTEModal
  NoteModalInputContent: {
    width: "100%",
    marginBottom: 20,
    height: 500,
    paddingHorizontal: "5%",
  },
  //FAB Modal
  btnContainerFAB: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "3.7%",
  },
});
