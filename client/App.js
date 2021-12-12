import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { Header, SearchBar } from "react-native-elements";
import ShowMore from 'react-native-show-more-button';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'SEARCH ON GITHUB', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
        
      <SearchBar
        placeholder="Type Here To Search Someone On Github"
        onChangeText={setUsername}
        value={username}
        onSubmitEditing={searchUser}
        round="true"
        />
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.bigText}>Search on github is an app that allow you to search someone on github and get his data</Text>
          <Text style={styles.smallText}>Use the search bar above to get data</Text>
        <ShowMore height={180} buttonColor={"#FF0000"}>
          <Image source={{ uri: user.avatar_url }} style={styles.image} />
            <Text>
              <Text style={styles.bold}>Username:</Text>
              <Text>{user.login}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Github id:</Text>
              <Text>{user.id}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Github url:</Text>
              <Text>{user.html_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Number of repository:</Text>
              <Text>{user.public_repos}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Number of followers:</Text>
              <Text>{user.followers}</Text>
            </Text>

            
            <Text>
              <Text style={styles.bold}>Account created at:</Text>
              <Text>{user.created_at}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Account updated at:</Text>
              <Text>{user.updated_at}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Node id:</Text>
              <Text>{user.node_id}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Gravatar id:</Text>
              <Text>{user.gravatar_id}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Github API url :</Text>
              <Text>{user.url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Followers url:</Text>
              <Text>{user.followers_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Following url:</Text>
              <Text>{user.following_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Gists url:</Text>
              <Text>{user.gists_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Starred url:</Text>
              <Text>{user.starred_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Subscriptions url:</Text>
              <Text>{user.subscriptions_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Organizations url:</Text>
              <Text>{user.organizations_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Repository url:</Text>
              <Text>{user.repos_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Events url:</Text>
              <Text>{user.events_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Received events url:</Text>
              <Text>{user.received_events_url}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Type:</Text>
              <Text>{user.type}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Site admin:</Text>
              <Text>{user.site_admin}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Name:</Text>
              <Text>{user.name}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Company:</Text>
              <Text>{user.company}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Blog:</Text>
              <Text>{user.blog}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Location:</Text>
              <Text>{user.location}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Email:</Text>
              <Text>{user.email}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Hireable:</Text>
              <Text>{user.hireable}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Bio:</Text>
              <Text>{user.bio}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Twitter username:</Text>
              <Text>{user.twitter_username}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Public gists:</Text>
              <Text>{user.public_gists}</Text>
            </Text>
            <Text>
              <Text style={styles.bold}>Following:</Text>
              <Text>{user.following}</Text>
            </Text>

        </ShowMore>
          </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
  },
  bigText: {
    marginTop: 5,
    fontSize: 18,
  },
  smallText: {
    fontSize: 12,
    color: "#ccc",
  },
  bold: {
    fontWeight: "bold",
    marginRight: 4,
  },
  image: {
    marginTop:20,
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});
