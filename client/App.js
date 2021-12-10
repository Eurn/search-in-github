import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

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
      <Text>Username:</Text>
      <br />
      <TextInput onChangeText={setUsername} value={username} />
      <br />
      <Button onPress={searchUser} title="Search" />
      <Text>{user.username}</Text>
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
});
