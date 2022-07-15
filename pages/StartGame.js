import {
   Button,
   Keyboard,
   StyleSheet,
   Text,
   TouchableWithoutFeedback,
   View,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import React from "react";

const StartGame = () => {
   const [enteredValue, setEnteredValue] = React.useState("");
   const handlerInputNumber = (text) => {
      setEnteredValue(text.replace(/[^0-9]/g, ""));
   };

   return (
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
         <View style={styles.screen}>
            <Text style={styles.title}>Comienza el juego</Text>
            <Card style={styles.inputContainer}>
               <Text style={styles.secondTitle}>Elija un numero</Text>
               <Input
                  blurOnsubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  maxLength={2}
                  value={enteredValue}
                  onChangeText={handlerInputNumber}
               />
               <View style={styles.buttonContainer}>
                  <Button
                     title="Limpiar"
                     onPress={() => {}}
                     color={Colors.accent}
                  />
                  <Button
                     title="Confirmar"
                     onPress={() => {}}
                     color={Colors.primary}
                  />
               </View>
            </Card>
         </View>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: "center",
   },
   title: {
      fontSize: 20,
      marginVertical: 10,
   },
   secondTitle: {
      fontSize: 15,
      marginVertical: 10,
      textAlign: "center",
   },
   inputContainer: {
      width: 300,
      height: 140,
      maxWidth: "80%",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
   },
   input: {
      width: 20,
      textAlign: "center",
      fontSize: 16,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
   },
   buttonContainer: {
      flexDirection: "row",
      width: 300,
      justifyContent: "space-around",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: "white",
      borderRadius: 10,
   },
});

export default StartGame;
