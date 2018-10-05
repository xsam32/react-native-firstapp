import React, { Component } from "react";
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

export default class HomePage extends Component {
  static navigationOptions = { title: "My App" };
  contact = ["row1", "row2", "row3"];

  constructor(props) {
    super(props);

    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

    onClickItem=(item)=>{
        this.props.navigation.navigate("Detail", item);
    };

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View>
        <List
          dataArray={this.contact}
          renderRow={item => {
            return (
              <ListItem
                onPress={() => {
                  this.onClickItem(item);
                }}
              >
                <Text>{item}</Text>
              </ListItem>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
