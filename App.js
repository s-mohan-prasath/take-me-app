import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider } from "react-redux";
import configStore from "./app/store/configStore";

import Main from "./app/Main";

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
        <Main />
      </PaperProvider>
    </Provider>
  );
}
