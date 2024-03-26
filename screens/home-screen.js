import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import blog02 from "../assets/blog02.png";
import blog04 from "../assets/blog04.png";
import NetInfo from "@react-native-community/netinfo";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const navigation = useNavigation();

  const onRefresh = () => {
    setRefreshing(true);
    console.log("Refreshing");
  };

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      // Listen for network state changes
      setIsConnected(state.isConnected);
    });

    if (isConnected) {
      setTimeout(() => {
        setIsLoading(false);
        setRefreshing(false);
      }, 5000);
    }
  }, [refreshing, isLoading, isConnected]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {isConnected ? (
        isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
          </View>
        ) : (
          <View>
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.title}>Welcome to Albinism Detection</Text>
                <Text style={styles.description}>
                  This project aims at detecting albinism using advanced genetic
                  data analysis. By analyzing specific genetic markers, our
                  sophisticated algorithm provides accurate insights into an
                  individual's likelihood of having albinism.
                </Text>
                <Image source={blog02} style={styles.image} />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("AiForm")}
                  >
                    <Text style={styles.buttonText}>Explore our Algorithm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.algorithmSection}>
              <View style={styles.cardContent}>
                <Text style={styles.title}>Our Advanced Genetic Algorithm</Text>
                <Text style={styles.description}>
                  Our algorithm analyzes genetic markers associated with
                  albinism. It uses NavLink tolex genetic model to accurately
                  predict the likelihood of albinism in individuals. With
                  NavLink tok record of high accuracy, our algorithm is trusted
                  by experts in genetics and medical fields.
                </Text>
                <Image source={blog04} style={styles.image} />
              </View>
            </View>
            <View style={styles.contactSection}>
              <View style={styles.cardContent}>
                <Text style={styles.title}>Want to Learn More?</Text>
                <Text style={styles.description}>
                  If you have questions or would like to know more about our
                  project and algorithm, please don't hesitate to get in touch.
                  Our team is here to provide you with the information you need.
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Contact")}
                  >
                    <Text style={styles.buttonText}>Contact Us</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )
      ) : (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    position: "relative",
  },
  card: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  cardContent: {
    maxWidth: 400,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    color: "gray",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  algorithmSection: {
    backgroundColor: "#F3F4F6",
    padding: 12,
  },
  contactSection: {
    backgroundColor: "white",
    padding: 12,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
   
    
  },
  offlineText: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
