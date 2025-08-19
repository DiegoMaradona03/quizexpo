import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { questoes } from "../assets/mockups/questoes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(65, 65, 65, 1)",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "rgba(255, 255, 255, 1)"
  },
  botao: {
    padding: 15,
    backgroundColor: "rgba(122, 122, 122, 1)",
    borderRadius: 8
  }
});

export default function Resultado() {
  const { score } = useLocalSearchParams();
  const total = questoes.length;

  function voltarInicio() {
    router.dismissAll();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Você acertou {score} de {total} questões!
      </Text>

      <TouchableOpacity onPress={voltarInicio} style={styles.botao}>
        <Text>Voltar ao início</Text>
      </TouchableOpacity>
    </View>
  );
}