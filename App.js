import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, AppRegistry, Button} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

const Home = () => <Text style={styles.header}>Home</Text>;

const Search = () => <Text style={styles.header}>Search</Text>;

const Progress = () => <Text style={styles.header}>Progress</Text>;

const Workout = ({ match }) => (
  <Text style={styles.topic}>{match.params.workoutId}</Text>
);

const Workouts = ({ match }) => (
  <View>
    <Text style={styles.header}>Workouts</Text>

    <Route
      exact
      path={match.path}
      render={() => <Text style={styles.topic}>Select a workout plan.</Text>}
    />

    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Day 1</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Day 2</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Day 3</Text>
      </Link>
    </View>

    <Route path={`${match.path}/:workoutId`} component={Workout} />

  </View>
);

const platform = Platform.select({
  ios: 'iOS',
  android: 'Android',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
<NativeRouter>
    

    <View style={styles.header}>
      <Route exact path="/" component={Home} />
      <Route path="/workouts" component={Workouts} />
      <Route path="/progress" component={Progress} />
      <Route path="/search" component={Search} />
    </View>

    <View style={styles.container}>
      <Text>You are using an {platform} device</Text>
    </View>

    <View style={styles.nav}>
        <Link to="/search" style={styles.navItem}>
          <Text>Search</Text>
        </Link>
        <Link to="/progress" style={styles.navItem}>
          <Text>Progress</Text>
        </Link>
        <Link to="/workouts" style={styles.navItem}>
          <Text>Workouts</Text>
        </Link>
        <Link to="/" style={styles.navItem}>
          <Text>Dashboard</Text>
        </Link>
      </View>

  </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    flex: 1
  },
  header: {
    marginTop: 5,
    padding: 10,
    flex: 1,
    fontSize: 16,
    alignItems: "center"
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#3F5AA6",
    color: "#AFAFAF"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  main: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent("GymTracker", () => App);
