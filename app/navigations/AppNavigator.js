import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  //Screens
  Home,
  ArchiveScreen,
  SettingScreen,
  TrashScreen,
  Search,
  Notification,
} from "../screens";
import {
  // Modal Screens
  NoteBookModalScreen,
  NoteModalScreen,
  TagModalScreen,
} from '../screens/fab'

import { COLORS, ENV, ROUTES, SETTINGS } from "../config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.HOME_DRAWER}
      screenOptions={{ headerStyle: { backgroundColor: COLORS.secondary } }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={Home}
        options={{
          title: ROUTES.HOME,
          headerTitle: ENV.APP_TITLE,
          headerRight: () => (
            <View style={[{ flexDirection: "row", marginRight: "3%" }]}>
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.SEARCH)}
              >
                <Ionicons
                  name="search"
                  size={24}
                  color="black"
                  style={{ marginRight: 14 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.NOTIFICATION)}
              >
                <Icon
                  name="bell"
                  size={24}
                  color="black"
                  style={{ marginRight: 14 }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Drawer.Group>
        <Drawer.Screen
          name={ROUTES.ARCHIVE_DRAWER}
          component={ArchiveScreen}
          options={{ title: ROUTES.ARCHIVE }}
        />
        <Drawer.Screen
          name={ROUTES.TRASH_DRAWER}
          component={TrashScreen}
          options={{ title: ROUTES.TRASH }}
        />
        <Drawer.Screen
          name={ROUTES.SETTINGS_DRAWER}
          component={SettingScreen}
          options={{ title: ROUTES.SETTINGS }}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.DRAWER}>
      <Stack.Screen
        name={ROUTES.DRAWER}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.NOTIFICATION}
        component={Notification}
        options={{
          title: ROUTES.NOTIFICATION,
          headerStyle: { backgroundColor: COLORS.secondary },
        }}
      />
      <Stack.Screen
        name={ROUTES.SEARCH}
        component={Search}
        options={{
          title: ROUTES.SEARCH,
          headerStyle: { backgroundColor: COLORS.secondary },
        }}
      />
      <Stack.Screen
        name={ROUTES.NOTE_MODAL}
        component={NoteModalScreen}
        options={{}}
      />
      <Stack.Screen
        name={ROUTES.TAG_MODAL}
        component={TagModalScreen}
        options={{}}
      />
      <Stack.Screen
        name={ROUTES.NOTEBOOK_MODAL}
        component={NoteBookModalScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
const styles = StyleSheet.create({});
