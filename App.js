// Importando os elementos utilizados
import { View } from "react-native";

// Importando os componentes 
import Header from "./src/assets/componentes/Header";
import Login from "./src/assets/pages/Login";
import Footer from "./src/assets/componentes/Footer";

// Importando o arquivo do StyleSheet
import { styles } from "./src/assets/styles/StyleSheet";

export default function App() {
  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <Header />

      {/* Corpo */}
      <Login />

      {/* Rodapé */}
      <Footer />
    </View>
  );
}