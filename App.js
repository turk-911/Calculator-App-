import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  function calculateResult() {
    try {
      let res = eval(input).toString();
      // res = res.toFixed(5);
      setResult(res);
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
    } else if (value == 'DEL') {
      let something = input.substring(0, input.length - 1);
      setInput(something);
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
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={{height: Dimensions.get("window").height / 2}}>
        <View style={styles.row}>
          {["7", "8", "9", "/"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {["4", "5", "6", "*"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {["1", "2", "3", "-"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {["00", "0", ".", "+"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['DEL', 'C', '=', '%'].map((item) => (
            <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
              <Text style={styles.buttonText}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: "20%",
    flexWrap: "wrap",
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#d6d6d6",
    height: Dimensions.get("window").height / 4,
  },
  resultText: {
    padding: 20,
    fontSize: 40,
    margin: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#d6d6d6",
    height: Dimensions.get("window").height / 4,
    borderTopColor: 'black',
    borderWidth: 1,
  },
  inputText: {
    fontSize: 30,
    margin: 10,
    padding: 20,
  },
  buttonsContainer: {
    // flex: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#e5e5e5",
  },
  button: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "##717377",
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 30,
  },
});
