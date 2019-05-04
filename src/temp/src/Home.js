// Home.js
import React from "react";
import { View, Text, Button, StyleSheet, AsyncStorage } from "react-native";
import { goToAuth, goWalk } from "./navigation";
import { Navigation } from "react-native-navigation";

import { USER_KEY, FIRST_RUN } from "./config";

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        visible: false
      }
    };
  }
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      goToAuth();
    } catch (err) {
      console.log("error signing out...: ", err);
    }
  };

  logoutWalk = async () => {
    try {
      await AsyncStorage.removeItem(FIRST_RUN);
      goWalk();
    } catch (err) {
      console.log("error signing out...: ", err);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button onPress={this.logout} title="Sign Out" />

        <Button onPress={this.logoutWalk} title="Sign Out walk" />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Screen2"
              }
            });
          }}
          title="View next screen"
        />

        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Contacts"
              }
            });
          }}
          title="Contacts"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Register"
              }
            });
          }}
          title="Register"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Conversations"
              }
            });
          }}
          title="Conversations"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Chat"
              }
            });
          }}
          title="Chat"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Verify"
              }
            });
          }}
          title="Verify"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Profile"
              }
            });
          }}
          title="Profile"
        />

        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Splash"
              }
            });
          }}
          title="Splash"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});