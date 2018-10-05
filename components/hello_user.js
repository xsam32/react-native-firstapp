import React, { Component } from "react";
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
  Thumbnail
} from "native-base";
import { StyleSheet, View } from "react-native";

export default class HelloUser extends Component {
  render() {
    let username = this.props.username;
    let helloUserData = this.props.data;
    console.log(this.props.data);
    return (
      <View>
        <Text style={{ color: helloUserData.color }}> Hello, {username} </Text>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button full success>
            <Text>OK</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
