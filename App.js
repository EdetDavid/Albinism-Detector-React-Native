import React, { useState, useEffect } from "react";
import  "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./navigation/drawer";
import NetInfo from "@react-native-community/netinfo";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
  }, [isConnected]);

  return (
    <NavigationContainer>
      {isConnected ? (
        <MyDrawer />
      ) : (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      )}
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  offlineText: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 50,
  },
});
