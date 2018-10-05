import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class WarningUser extends Component {
  render() {
      view = <View>
          <Text>
            Pleas
            {this.props.username}
          </Text>
        </View>;
      console.log("======", this.props.username)
    if (this.props.username) {
        console.log('true');
      view = <View />;
    } else {
        console.log('false');
        view = <View><Text style={{color: 'red'}}>Please insert username</Text></View>;
    }

    return view
  }
}

const styles = StyleSheet.create({});
