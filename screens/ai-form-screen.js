import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native";
import axios from "axios";

const AiFormScreen = () => {
  const [populationSize, setPopulationSize] = useState("");
  const [numGenerations, setNumGenerations] = useState("");
  const [numSelected, setNumSelected] = useState("");
  const [mutationRate, setMutationRate] = useState("");
  const [geneLength, setGeneLength] = useState("");
  const [individuals, setIndividuals] = useState([]);
  const [showDiv, setShowDiv] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    console.log("Refreshing");
    // fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://albinism-detector.onrender.com/api/individuals",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setIndividuals(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleSubmit = () => {
    setShowDiv(true);
    const data = {
      population_size: populationSize,
      num_generations: numGenerations,
      num_selected: numSelected,
      mutation_rate: mutationRate,
      gene_length: geneLength,
    };

    axios
      .post("https://albinism-detector.onrender.com/api/individuals", data)
      .then((response) => {
        console.log(response.data.message);
        setPopulationSize("");
        setNumGenerations("");
        setNumSelected("");
        setMutationRate("");
        setGeneLength("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [refreshing]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.formContainer}>
        <Text style={styles.label}>Population Size:</Text>
        <TextInput
          style={styles.input}
          value={populationSize}
          onChangeText={(text) => setPopulationSize(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Number of Generations:</Text>
        <TextInput
          style={styles.input}
          value={numGenerations}
          onChangeText={(text) => setNumGenerations(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Number of Selected Individuals:</Text>
        <TextInput
          style={styles.input}
          value={numSelected}
          onChangeText={(text) => setNumSelected(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Mutation Rate:</Text>
        <TextInput
          style={styles.input}
          value={mutationRate}
          onChangeText={(text) => setMutationRate(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Gene Length:</Text>
        <TextInput
          style={styles.input}
          value={geneLength}
          onChangeText={(text) => setGeneLength(text)}
          keyboardType="numeric"
        />

        <Button title="Run" onPress={handleSubmit} />
      </View>

      {showDiv && (
        <View style={styles.output}>
          <Text style={styles.header}>Solutions</Text>
          <FlatList
            data={individuals}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.individual} key={item.id}>
                <Text>ID: {item.id}</Text>
                <Text>Gene Length: {item.genes}</Text>
                <Text>Fitness Score: {item.fitness_score}</Text>
                <Text>Generation: {item.generation}</Text>
                <Text>Has Albinism: {String(item.has_albinism)}</Text>
              </View>
            )}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  output: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 16,
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  individual: {
    marginBottom: 10,
  },
});

export default AiFormScreen;
