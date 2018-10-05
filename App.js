import React from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, View, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  Grid,
  Col,
  Thumbnail,
  List,
  ListItem
} from "native-base";
import HelloUser from "./components/hello_user";
import WarningUser from "./components/warning_user";

import HomePage from "./pages/homePage";
import DetailPage from "./pages/DetailPage";

const App = createStackNavigator({
  Home: { screen: HomePage },
  Detail: {screen: DetailPage}
});

export default App;
