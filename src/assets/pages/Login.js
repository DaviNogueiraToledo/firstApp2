
// Importando os elementos utilizados
import { View } from "react-native";

// Importando os componentes
import LoginImageBackground from "../componentes/LoginImageBackground";
import LoginImage from "../componentes/LoginImage";
import LoginText from "../componentes/LoginText";
import LoginInput from "../componentes/LoginInput";
import LoginButton from "../componentes/LoginButton";

// Importando o arquivo do StyleSheet
import { styles } from "../styles/StyleSheet";

export default function Login() {
  pressButton = () => {
    alert("Seja bem vindo!");
  };

  return (
    <View style={styles.body}>

      {/* Imagem de fundo */}
      <LoginImageBackground>

          {/* Imagem de fundo */}
          <LoginImage />

          {/* Texto que fica sobre as caixas de texto */}
          <LoginText />

          {/* Caixa de texto: Usuário */}
          <LoginInput />

          {/* Botão: Entrar */}
          <LoginButton />

      </LoginImageBackground>

    </View>
  );
}