import {StyleSheet, View} from 'react-native';

import AppLoading from 'expo-app-loading';
import GameOverScreen from './pages/GameOverScreen';
import GameScreen from './pages/GameScreen';
import Header from './components/Header';
import StartGameScreen from './pages/StartGame';
import {useFonts} from 'expo-font';
import {useState} from 'react';

export default function App() {
	const [loaded] = useFonts({Ar: require('./fonts/Ar.ttf')});
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);
	const handlerStartGame = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};
	const handlerRestart = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};
	const handlerGameOver = (rounds) => {
		setGuessRounds(rounds);
	};
	let content = <StartGameScreen onStartGame={handlerStartGame} />;

	if (userNumber && guessRounds <= 0) {
		content = (
			<GameScreen userOption={userNumber} onGameOver={handlerGameOver} />
		);
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen
				rounds={guessRounds}
				choice={userNumber}
				onRestart={handlerRestart}
			/>
		);
	}

	if (!loaded) return <AppLoading />;

	return (
		<View style={styles.container}>
			<Header title={'Adivina el numero'} />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
