import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  botao: {
    padding: 20,
    backgroundColor: "rgba(34, 34, 34, 1)",
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
  },
});

export default function Index() {
  function iniciarQuiz() {
    router.push("/pergunta?id=1&score=0");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={iniciarQuiz} style={styles.botao}>
        <Text style={styles.textoBotao}>Iniciar Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}
