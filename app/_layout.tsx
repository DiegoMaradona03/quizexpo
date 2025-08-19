import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  texto: {
    color: "#ffffffff",
  },
});

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.faixa,
        headerTitleStyle: styles.texto,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Quiz" }} />
      <Stack.Screen name="pergunta" options={{ title: "Pergunta" }} />
      <Stack.Screen name="resultado" options={{ title: "Resultado" }} />
    </Stack>
  );
}