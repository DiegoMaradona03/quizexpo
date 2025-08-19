import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { questoes } from "../assets/mockups/questoes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(65, 65, 65, 1)",
    padding: 16
  },
  pergunta: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "rgba(255, 255, 255, 1)"
  },
  opcao: {
    width: "100%",
    padding: 15,
    backgroundColor: "rgba(122, 122, 122, 1)",
    borderRadius: 8,
    marginBottom: 8
  },
  textoOpcao: {
    fontSize: 16,
    color: "#ffffffff",
  }
});

export default function Pergunta() {
  const params = useLocalSearchParams();
  const id = Number(params.id);
  const score = Number(params.score);

  const questao = questoes.find((q) => q.id === id);

  function selecionarResposta(index: number) {
    const acertou = (index + 1) === questao.certa;
    const novoScore = acertou ? score + 1 : score;

    const proxima = id + 1;

    if (proxima > questoes.length) {
      router.push(`/resultado?score=${novoScore}`);
    } else {
      router.push(`/pergunta?id=${proxima}&score=${novoScore}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{questao.pergunta}</Text>

      {questao.respostas.map((resp, i) => (
        <TouchableOpacity
          key={i}
          style={styles.opcao}
          onPress={() => selecionarResposta(i)}
        >
          <Text style={styles.textoOpcao}>{resp}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}