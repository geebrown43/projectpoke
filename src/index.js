import React from "react";
import { SafeAreaView } from "react-native";
import Router from "./routes";

export default () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#393e46" }}
      forceInset={{ verticle: "always" }}
    >
      <Router />
    </SafeAreaView>
  );
};

// const store = configureStore();
{
  /* <Provider store={store}>
<Router />
</Provider> */
}
