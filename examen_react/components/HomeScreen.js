import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Pantalla de inicio</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: "#8B0000" }]}
            onPress={() => navigation.navigate("Savings")}
          >
            <MaterialCommunityIcons name="piggy-bank-outline" size={32} color="white" />
            <Text style={styles.buttonText}>Ahorros</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: "#800020" }]}
            onPress={() => navigation.navigate("Profile")}
          >
            <MaterialCommunityIcons name="account-outline" size={32} color="white" />
            <Text style={styles.buttonText}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: "#8B0000" }]}
            onPress={() => navigation.navigate("Config")}
          >
            <MaterialCommunityIcons name="cog-outline" size={32} color="white" />
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: "#5B0E2D" }]}
            onPress={() => alert("Leave")}
          >
            <MaterialCommunityIcons name="logout" size={32} color="white" />
            <Text style={styles.buttonText}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A2D34",
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: "#5B0E2D",
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 28,
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#3E4C59",
    padding: 20,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  circleButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    borderRadius: 45,
    marginVertical: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
});

export default HomeScreen;
