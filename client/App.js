import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  async function searchUser() {
    try {
      const response = await fetch(
        `http://localhost:4242/api/users/${username}`
      );
      const user = await response.json();
      setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text>Username:</Text>
          <br />
          <TextInput onChangeText={setUsername} value={username} />
          <br />
          <Button onPress={searchUser} title="Search" />
        </View>
        <Text>{user.username}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
  },
});
