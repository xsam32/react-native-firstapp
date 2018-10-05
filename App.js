import React from "react";
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
  Thumbnail
} from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  showLog(txt) {
    console.log(txt);
  }

  popup() {
    Alert.alert("Hello", "สวัสดีโลก");
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Body>
            <Title>My App</Title>
          </Body>
        </Header>
        <Content>
          <Text>Hello</Text>
          <Button iconLeft light>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>

          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input onChangeText={this.showLog} />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button iconLeft onPress={this.popup}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
          </Form>
          <Thumbnail
            style={{width:300, height: 100}}
            source={{
              uri:
                "https://www.google.co.th/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }}
          />
        </Content>
      </Container>
    );
  }
}
