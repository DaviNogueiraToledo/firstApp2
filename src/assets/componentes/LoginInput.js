import { TextInput, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function LoginInput() {
  return (
    <>
      {/* Caixa de texto do email */}
      <TextInput
        style={styles.inputName}
        placeholder="Email"
        inputMode="text"
        placeholderTextColor="black"
      />

      {/* Caixa de texto da senha */}
      <TextInput
        style={styles.inputName}
        placeholder="Senha"
        inputMode="numeric"
        secureTextEntry={true}
        placeholderTextColor="black"
      />
    </>
  );
}