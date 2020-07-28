import { StatusBar } from "expo-status-bar";
import React from "react";
import { SectionList, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  const DATA = [
    {
      title: "A",
      data: ["Aziz", "Anvar", "Abbos"],
    },
    {
      title: "B",
      data: ["Bunni", "Bexruz", "Botir", "Begicha"],
    },
    {
      title: "C",
      data: ["Cifs Jasur", "Central bank", "Cyberg comp"],
    },
    {
      title: "D",
      data: ["Doni", "Durbek", "Davron"],
    },
    {
      title: "F",
      data: ["Feruz", "Farrux", "Fozil"],
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Text style={styles.groups}>Groups</Text>
          <AntDesign name="plus" style={styles.plusIcon} />
        </View>
        <View style={styles.topMiddle}>
          <Text style={styles.contacts}>Contacts</Text>
          <View style={styles.search}>
            <AntDesign name="search1" style={styles.searchIcon} />
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <SectionList
            sections={DATA}
            renderItem={({ item }) => (
              <Text style={{ width: 340, fontSize: 20 }}>{item}</Text>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.section}>{title}</Text>
            )}
          />
        </View>
      </View>
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
    flex: 1,

    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  top: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",

    width: "100%",
  },
  topMiddle: {
    alignItems: "center",
    width: "100%",
    flex: 2,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  groups: {
    marginRight: 270,
    color: "blue",
  },
  plusIcon: {
    fontSize: 20,
    color: "blue",
  },
  contacts: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    left: 30,
  },
  section: {
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#E1DDDD",
    fontSize: 24,
    paddingLeft: 8,
  },
  search: {
    width: "90%",
    height: 30,
    backgroundColor: "#E1DDDD",
    alignSelf: "center",
    marginTop: 50,
    right: 45,
    alignItems: "center",
  },
  searchText: {
    alignSelf: "flex-start",
    marginTop: 5,
    marginLeft: 30,
    fontSize: 15,
    color: "black",
  },
  searchIcon: {
    fontSize: 15,
    position: "absolute",
    top: 8,
    left: 10,
  },
  body: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
  },
});
