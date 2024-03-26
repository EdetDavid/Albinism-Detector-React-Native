import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import APIService from "../navigation/APIService";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await APIService.loginUser({ username, password });

      if (response.token) {
        await AsyncStorage.setItem("authToken", response.token);
        navigation.navigate("Home");
      } else {
        Alert.alert("Login Failed", "Invalid username or password.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await APIService.RegisterUser({
        username,
        email,
        password,
      });

      if (response.token) {
        await AsyncStorage.setItem("authToken", response.token);
        navigation.navigate("Home");
      } else {
        Alert.alert("Registration Failed", "Username or Email Already Taken.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Error",
        "An error occurred during Registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.textHeading}>
          {isLogin ? "Please Login" : "Please Register"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        )}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? "ios-eye-off" : "ios-eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : isLogin ? (
          <Button title="Login" onPress={handleLogin} />
        ) : (
          <Button title="Register" onPress={handleRegister} />
        )}
        <Text style={styles.text} onPress={() => setLogin(!isLogin)}>
          {isLogin
            ? "Don't Have an Account? Please Register"
            : "Already Have an Account? Please Login"}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  textHeading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    marginVertical: 8,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    color: "blue",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  passwordInput: {
    flex: 1,
  },
});

export default LoginScreen;
