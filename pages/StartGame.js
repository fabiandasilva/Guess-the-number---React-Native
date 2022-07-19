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
import NumberContainer from "../components/NumberContainer";
import React from "react";
import tw from "twrnc";

const StartGame = (props) => {
   const [enteredValue, setEnteredValue] = React.useState("");
   const [confirmed, setConfirmed] = React.useState(false);
   const [selectedNumber, setSelectedNumber] = React.useState();

   const handlerInputNumber = (text) => {
      setEnteredValue(text.replace(/[^0-9]/g, ""));
   };
   const handlerResetInput = () => {
      setConfirmed(false);
      setEnteredValue("");
   };
   const handlerConfirmInput = () => {
      let chosenNumber = parseInt(enteredValue);
      if (
         chosenNumber === NaN ||
         chosenNumber <= 0 ||
         chosenNumber > 99 ||
         chosenNumber.length < 1
      )
         return;
      setConfirmed(true);
      setSelectedNumber(parseFloat(enteredValue));
      setEnteredValue("");
   };
   /* const confirmedOutput = confirmed ? <Text>Numero elegido: {selectedNumber}</Text> : null   */
   return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <View style={styles.screen}>
            <Text style={tw`text-cyan-600`}>Comienza el juego</Text>
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
                     onPress={handlerResetInput}
                     color={Colors.accent}
                  />
                  <Button
                     title="Confirmar"
                     onPress={() => handlerConfirmInput()}
                     color={Colors.primary}
                     disabled={enteredValue.length < 2 ? true : false}
                  />
               </View>
            </Card>

            {confirmed && (
               <View style={styles.sumaryContainer}>
                  <Text>Numero elegido</Text>
                  <NumberContainer>{selectedNumber}</NumberContainer>
                  <Button
                     title="Empezar Juego"
                     onPress={() => props.onStartGame(selectedNumber)}
                  />
               </View>
            )}
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
      fontFamily: 'Ar', 
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
   sumaryContainer: {
      width: "80%",
      marginTop: 20,
      alignItems: "center",
      justifyContent: "center",
   },
});

export default StartGame;
