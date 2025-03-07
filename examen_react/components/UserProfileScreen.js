import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UserProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Perfil de Usuario</Text>
            </View>
            <View style={styles.card}>
                <Image source={require("../assets/cris.jpeg")} style={styles.image} />
                <Text style={styles.text}> Informacion de Usuario</Text>
                
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Ionicons name="person-outline" size={24} color="white" />
                        <Text style={styles.infoText}>Cristian Vargas</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Ionicons name="mail-outline" size={24} color="white" />
                        <Text style={styles.infoText}>cristian022@gmail.com</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Ionicons name="call-outline" size={24} color="white" />
                        <Text style={styles.infoText}>6182596613</Text>
                    </View>
                </View>
            </View>
            <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: .9,
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
    title: {
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
    text: {
        fontSize: 24,
        color: "white",
        marginVertical: 10,
        fontWeight: "bold",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: "#00A896",
        marginBottom: 10,
    },
    infoContainer: {
        marginTop: 15,
        width: "100%",
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#5B0E2D",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    infoText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
});

export default UserProfileScreen;
