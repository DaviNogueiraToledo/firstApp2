import { ImageBackground } from "react-native";
import { styles } from "../styles/StyleSheet";

const LoginImageBackground = ({ children }) => {
  
  return (
      <ImageBackground
        source={require("../images/fundo.png")}
        style={styles.image}
      >
       { children }
      </ImageBackground>
  );
}

export default LoginImageBackground;

