import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";
import tw from "twrnc";

const GameScreen = (props) => {
   const [currentGuess, setCurrentGuess] = useState();

   const generateRandomBetween = (min, max, userChoice) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomNumber === userChoice) {
         return generateRandomBetween(min, max, userChoice);
      } else {
         return setCurrentGuess(randomNumber);
      }
   };
   useEffect(() => {
      generateRandomBetween(1, 100, props.userChoice);
   }, []);

   return (
      <Card>
         <Text style={tw`text-center text-lg`}>La suposicion del oponente</Text>
         <NumberContainer>{currentGuess}</NumberContainer>
         <View style={tw`flex flex-row space-x-4 m-0.5 justify-around w-300px`}>
            <Button title="Menor" onPress={() => {}} color={Colors.accent}/>
            <Button title="Mayor" onPress={() => {}}  color={Colors.secondary}/>
         </View>
      </Card>
   );
};

export default GameScreen;


