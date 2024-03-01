import { Button, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function LoginButton() {
  return (
      <Button
        onPress={pressButton}
        title="Entrar!"
        color="black"
      />
  );
}