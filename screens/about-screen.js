import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { HeaderBackButton } from "@react-navigation/elements";

const AboutScreen = () => {
  const navigation = useNavigation(true);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "back",

      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>About Albinism Detection Project</Text>
      <Text>
        The Albinism Detection Project is a revolutionary initiative aimed at
        developing a web-based system for the early detection of albinism using
        advanced genetic algorithms.
      </Text>
      <Text>
        Albinism is a genetic disorder that affects the normal production of
        melanin, a pigment responsible for the coloration of skin, hair, and
        eyes. Individuals with albinism often face various health challenges,
        including vision impairment and an increased susceptibility to skin
        cancer.
      </Text>
      <Text>
        Timely detection and diagnosis are crucial for delivering effective care
        and treatment.
      </Text>
      <Text style={styles.subHeading}>Unleashing Genetic Algorithms</Text>
      <Text>
        At the core of this innovative project lies the utilization of genetic
        algorithms, a computational technique inspired by the principles of
        natural evolution. Genetic algorithms commence with a diverse population
        of random solutions and employ genetic operators like selection,
        crossover, and mutation to generate new and improved solutions adapted
        to the specific problem at hand.
      </Text>
      <Text>
        The algorithm continues to evolve iteratively until it converges on an
        optimal or near-optimal solution.
      </Text>
      <Text style={styles.subHeading}>The Components</Text>
      <Text>
        The Albinism Detection System comprises two integral components working
        harmoniously to achieve the project's objectives.
      </Text>
      <Text style={styles.componentHeading}>1. Web Interface</Text>
      <Text>
        Our web interface is crafted using React JavaScript, a widely recognized
        framework celebrated for building dynamic and interactive web pages. The
        user-friendly web interface empowers users to seamlessly upload their
        genetic data, access the results of the genetic analysis, and explore
        comprehensive information pertaining to albinism.
      </Text>
      <Text>
        It offers an intuitive and informative user experience, making the
        complex genetic analysis accessible to all.
      </Text>
      <Text style={styles.componentHeading}>2. Backend Server</Text>
      <Text>
        The backbone of the system is a robust backend server developed using
        Django, a versatile and powerful framework designed for web development.
        This server efficiently manages communication with the database,
        executes the intricate genetic algorithm, and generates comprehensive
        reports that facilitate a deeper understanding of the genetic data.
      </Text>
      <Text>
        It serves as the engine that powers the system's critical
        functionalities, ensuring accurate and reliable results.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  componentHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default AboutScreen;
