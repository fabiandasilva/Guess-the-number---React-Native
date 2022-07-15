import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./pages/StartGame";

export default function App() {
   return (
      <View style={styles.container}>
         <Header title={"Adivina el numero"} />
         <StartGameScreen />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
     
   },
});
