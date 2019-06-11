import React from "react";
import { Button } from "native-base";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import {
  CommunityScreen,
  MyDexScreen,
  LoginScreen,
  LoadingScreen,
  SearchDexScreen,
  CollectionScreen,
  EncounterCounterScreen
} from "../screens/index";

const CustomTabBarComponent = () => <Button Icon="menu-ios" />;
const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    Menu: CustomTabBarComponent,
    Community: CommunityScreen,
    MyDex: MyDexScreen
  },
  {
    tabBarOptions: {
      showIcon: true,
      style: {
        backgroundColor: "#393e46"
      }
    }
  }
);
const MaterialBottomTabNavigator = createMaterialTopTabNavigator(
  {
    Home: MaterialTopTabNavigator,
    Collection: CollectionScreen,
    Counter: EncounterCounterScreen
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: "#393e46"
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator({
  Home: MaterialBottomTabNavigator,
  Search: SearchDexScreen
});

const AuthStack = createStackNavigator(
  { SignIn: LoginScreen },
  { headerMode: "none" }
);
const AppStack = createStackNavigator(
  {
    MainNav: DrawerNavigator
  },
  {
    headerMode: "none"
  }
);
const toSignIn = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
});
export default createAppContainer(toSignIn);
