import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { COLORS, ENV, ROUTES } from "../../config";

const data = {
  title: "Hello",
  name: "Mohan Prasath S",
  email: "s.mohanprasath19478@gamil.com",
};

const Login = ({ navigation }) => {
  return (
    <>
    <Button onPress={() => navigation.navigate(ENV.APP_TITLE, data)}>
      Login
    </Button>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
