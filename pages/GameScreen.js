import { Alert, Text, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import NumberContainer from '../components/NumberContainer';
import tw from 'twrnc';

const GameScreen = (props) => {
	const {width, height} = useWindowDimensions();
	const {userOption, onGameOver} = props;
	const [rounds, setRounds] = useState(0);
   const currentLow = useRef(1);
   const currentHigh = useRef(100);
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

   const handlerNextGuess = direction => {
      if(
          (direction === 'lower' && currentGuess < userOption ) ||
          (direction === 'greater' && currentGuess > userOption)
      ) {
          return Alert.alert('No mientas!', 'Tu sabes que no es verdad...!', [
              {text: 'Intentar de nuevo', style: 'cancel'}
          ])
      }
      if(direction === 'lower') {
          currentHigh.current = currentGuess
      } else {
          currentLow.current = currentGuess
      }

      generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
      setRounds(current => current + 1)
  }
	useEffect(() => {
		generateRandomBetween(1, 100, props.userOption);
	}, []);
	useEffect(() => {
		if (currentGuess == userOption) onGameOver(rounds);
	}, [currentGuess, userOption, onGameOver]);
	return (
		<Card>
			<Text style={tw`text-center text-lg`}>La suposicion del oponente</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View
				style={{
					...tw.style('flex flex-row m-0.5 justify-around w-50'),
					marginTop: height > 600 ? 20 : 10,
				}}
			>
				<Button
					title="Menor"
					onPress={() => handlerNextGuess('lower')}
					color={Colors.accent}
				/>
				<Button
					title="Mayor"
					onPress={() => handlerNextGuess('greater')}
					color={Colors.secondary}
				/>
			</View>
		</Card>
	);
};

export default GameScreen;
