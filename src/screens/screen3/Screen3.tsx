import * as React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import CodePush from "react-native-code-push";

import { UIStore } from "stores/UIStore";
import { codePushConfig } from "utils/code-push";
import { COUNTER, IScreen } from "screens";
import { Button } from "components/button/Button";
import firebase from "react-native-firebase";

const s = require("./Screen3.scss");

@CodePush(codePushConfig())
@observer
export class Screen3 extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Screen3"
        }
      },
      bottomTab: {
        text: "Screen3",
        badge: "2",
        badgeColor: "red",
        testID: "bottomTabTestID",
        icon: require("../../assets/polar-bear.png"),

        textColor: "#979191",
        selectedTextColor: "black",

        fontSize: 10
      }
    };
  }

  componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <View style={s.content}>
          <Text style={s.text}>Screen3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    width: 300,
    height: 100
  }
});
