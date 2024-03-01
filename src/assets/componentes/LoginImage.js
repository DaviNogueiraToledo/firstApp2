import { Image, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function LoginImage() {
  return (
    <Image
      source={require("../images/favicon.png")}
      style={styles.image2}
      resizeMode="center"
    />
  );
}