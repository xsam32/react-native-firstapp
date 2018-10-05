import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class DetailPage extends Component {
  static navigationOptions = { title: "Detail" };
  
  render() {
      console.log(this.props);
      console.log(this.props.navigation.state.params);
      let data = this.props.navigation.state.params;
    return (
      <View>
            <Text style={{fontSize: 100,}}> {data} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
