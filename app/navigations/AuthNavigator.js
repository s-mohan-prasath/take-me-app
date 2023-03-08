import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Login,} from "../screens";
import { COLORS, ENV, ROUTES } from "../config";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{headerStyle: { backgroundColor: COLORS.secondary}}}
    >
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown:true}}
      />
      <Stack.Screen
        name={ENV.APP_TITLE}
        component={AppNavigator}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
