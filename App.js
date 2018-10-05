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
  Grid,
  Col,
  Thumbnail
} from "native-base";
import HelloUser from "./components/hello_user";
import WarningUser from "./components/warning_user";

export default class App extends React.Component {
  inputMessage = "";
  showWarning = "block";
  txtNumber = 0;
  vat = 7;

  constructor(props) {
    super(props);

    this.state = { loading: true, txt: "", txt2: "OK", resultVat: 0 };
  }

  showLog(txt) {
    console.log(txt);
  }

  popup() {
    Alert.alert("Hello", "สวัสดีโลก");
  }

  setMessage = txt => {
    this.inputMessage = txt;
    showWarning = "none";
    this.setState({ txt: txt });
    console.log(this.state);
    console.log(txt);
  };

  showMessage = () => {
    this.setState({ txt: "false" });
  };

  setNumber = (txt) => {
    this.txtNumber = txt;
  };
  calculateVat = () => {
    let result = (this.txtNumber * this.vat) / 100 + Number(this.txtNumber);
    this.setState({resultVat: result});
  };

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

    let helloUserData = { username: "Mr. Thawat", color: "red" };

    return <Container>
        <Header>
          <Body>
            <Title>Vat7</Title>
          </Body>
        </Header>
        <Content style={{padding: 10,}}>
          {/* <Text>Hello</Text>
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
            style={{ width: 300, height: 100 }}
            source={{
              uri:
                "https://www.google.co.th/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }}
          />
          <HelloUser username="Mr. Thawat" color="red" data={helloUserData} /> */}
          <Form>
            {/* <Item floatingLabel>
              <Label>Please insert Number</Label>
              <Input onChangeText={this.setNumber} />
            </Item> */}
            <Item regular style={{borderColor: 'blue',}}>
            
            <Input placeholder="Please insert Number" keyboardType='numeric' onChangeText={this.setNumber} />
            </Item>
          <Text> </Text>
            <Button onPress={this.calculateVat} full warning>
              <Text>Calculate</Text>
            </Button>
          </Form>
          <Grid>
            <Col style={{ height: 200 }}>
              <Text
                style={{ fontSize: 100, alignSelf: "center", color: "red" }}
              >
                {this.state.resultVat}
              </Text>
            </Col>
          </Grid>
        </Content>
      </Container>;
  }
}
