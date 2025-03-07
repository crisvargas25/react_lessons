import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SavingsScreen = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 10);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Ahorros</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.balanceText}>${count}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.circleButton, { backgroundColor: "#8B0000" }]} onPress={increment}>
            <MaterialCommunityIcons name="cash-plus" size={32} color="white" />
            <Text style={styles.buttonText}>Ahorrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.circleButton, { backgroundColor: "#5B0E2D" }]} onPress={reset}>
            <MaterialCommunityIcons name="cash-remove" size={32} color="white" />
            <Text style={styles.buttonText}>Retirar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  balanceText: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
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

export default SavingsScreen;