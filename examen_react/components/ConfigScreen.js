import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ConfigScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Settings</Text>
            </View>

            <View style={styles.card}>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#8B0000" }]}
                    onPress={() => alert("Cambiando el tema")}
                >
                    <Ionicons name="color-palette-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Cambiar Tema</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#800020" }]}
                    onPress={() => alert("Cambiando Idioma")}
                >
                    <Ionicons name="globe-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Idioma</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#A52A2A" }]}
                    onPress={() => alert("Cambiando contraseña")}
                >
                    <Ionicons name="key-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Contraseña</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: "#5B0E2D" }]}
                    onPress={() => alert("Cerrando sesión")}
                >
                    <Ionicons name="log-out-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
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
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 210,
        height: 50,
        paddingVertical: 10,
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
});

export default ConfigScreen;
