import 'react-native-gesture-handler'
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider } from "react-redux";
import configStore from "./app/store/configStore";

import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigations/AuthNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  const store = configStore();

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AuthNavigator/>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
