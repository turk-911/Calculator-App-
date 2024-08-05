import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  function calculateResult() {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  }
  function clear() {
    setInput("");
    setResult("");
  }
  function handlePress(value) {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clear();
    } else {
      setInput(input + value);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        {["7", "8", "9", "/"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
        {["4", "5", "6", "*"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
        {["1", "2", "3", "-"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
        {["0", ".", "=", "+"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.button, { flex: 2 }]}
          onPress={() => handlePress("C")}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  resultContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#d6d6d6",
  },
  resultText: {
    fontSize: 40,
    margin: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#d6d6d6",
  },
  inputText: {
    fontSize: 30,
    margin: 10,
  },
  buttonsContainer: {
    flex: 7,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#e5e5e5",
  },
  button: {
    width: "25%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 30,
  },
});
