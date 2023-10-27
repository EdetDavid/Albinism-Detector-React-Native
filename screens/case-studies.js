import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { HeaderBackButton } from "@react-navigation/elements";

function CaseStudiesScreen() {
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
      <Text style={styles.header}>
        Albinism Prediction using Genetic Algorithm
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Executive Summary</Text>
        <Text>
          This case study explores the application of Genetic Algorithms in
          predicting the likelihood of albinism based on genetic markers. Using
          a dataset of synthetic genetic data, we implemented a Genetic
          Algorithm to analyze genetic variations and assess the potential for
          albinism in individuals. The study reveals promising results in
          predicting albinism risk, which can contribute to early diagnosis and
          personalized healthcare.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text>
          Albinism is a genetic condition characterized by a lack of melanin
          production, resulting in the absence of pigmentation in the skin,
          hair, and eyes. Early detection of albinism is crucial for tailored
          healthcare and support. This case study aims to evaluate the
          effectiveness of Genetic Algorithms in predicting albinism, thus
          offering a valuable tool for geneticists, medical professionals, and
          individuals with genetic risk factors.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objectives</Text>
        <Text>
          - Assess the feasibility of predicting albinism using Genetic
          Algorithms. - Determine the accuracy of the algorithm in identifying
          genetic markers associated with albinism.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Methodology</Text>
        <Text>
          Data Source: A synthetic genetic dataset containing genetic markers
          associated with albinism. Algorithm: A Genetic Algorithm was
          implemented to evolve a population of potential genetic markers to
          minimize the prediction error using a fitness function. Steps: 1. Data
          Preprocessing: Cleaning and normalization of genetic data. 2. Genetic
          Algorithm Configuration: Selection, crossover, and mutation
          operations. 3. Model Evaluation: Assess the fitness of individuals
          within the population. 4. Termination Criteria: Define stopping
          conditions.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    padding: 20,
    textAlign: "center",
  },
  section: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default CaseStudiesScreen;
