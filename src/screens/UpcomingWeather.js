import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_min: 6.76,
      temp_max: 7.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_min: 7.76,
      temp_max: 8.87,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: {
      temp_min: 8.76,
      temp_max: 9.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { image } = styles;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/clouds-gf502c387a_1920.jpg")}
        style={image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
