import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, AppRegistry, Button} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

const Home = () => <Text style={styles.header}>Home</Text>;

const Calendar = () => <Text style={styles.header}>Calendar</Text>;

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
      <Route path="/calendar" component={Calendar} />
      <Route path="/workouts" component={Workouts} />
    </View>

    <View style={styles.container}>
      <Text>You are using an {platform} device</Text>
    </View>

    <View style={styles.nav}>
        <Link to="/calendar" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Calendar</Text>
        </Link>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link to="/workouts" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Workouts</Text>
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
    height: 50
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
