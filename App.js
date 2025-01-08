import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function App() {
  const [age, setAge] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  const updateLimits = () => {
    setLowerLimit(((220 - age) * 0.65).toFixed(0));
    setUpperLimit(((220 - age) * 0.85).toFixed(0));
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, styles.heading]}>Age</Text>
      <TextInput
        style={[styles.input]}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="decimal-pad"
      />
      <View style={[styles.divider, styles.martop]}></View>
      <View style={styles.limitsContainer}>
        <Text style={[styles.txt, styles.heading]}>Limits</Text>
        <Text style={[styles.limits, styles.txt]}>
          {lowerLimit ? lowerLimit : "?"} - {upperLimit ? upperLimit : "?"}
        </Text>
      </View>
      <View style={styles.divider}></View>
      <Pressable style={styles.btn} onPress={updateLimits}>
        <Text style={styles.btnText}>Calculate</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: "#4FAFE4",
    padding: 25,
  },
  btnText: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    gap: 18,
    justifyContent: "center",
    padding: 36,
  },
  martop: {
    marginTop: 56,
  },

  divider: {
    backgroundColor: "#aaa",
    width: "100%",
    height: 1,
  },
  limitsContainer: {
    height: "20%",
    backgroundColor: "#333",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
    padding: 36,
  },
  txt: {
    color: "#fff",
  },
  heading: {
    fontSize: 25,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
  },
  limits: {
    fontSize: 36,
  },
});
