import {
	Button,
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from 'react-native';

import Card from '../components/Card';
import tw from 'twrnc';
import {useEffect} from 'react';

const GameOverScreen = (props) => {
	const [isPorttrait, setIsPortrait] = React.useState(true);
	const onPortrait = () => {
		const dim = Dimensions.get('window');
		return dim.height > dim.width;
	};

	const statePortrait = () => setIsPortrait(onPortrait());

	useEffect(() => {
		Dimensions.addEventListener('change', statePortrait);
		return () => {
			Dimensions.remove('change', statePortrait);
		};
	}, []);
	return (
		<View style={tw`justify-center items-center flex-1 p-10`}>
			<Image
				source={{uri: 'https://c.tenor.com/g43TEZk3RxIAAAAj/dog-puppy.gif'}}
				style={tw`w-4/5  w-100 h-100`}
			/>
			<Card style={tw`mb-30 p-20 w-400 max-w-4/5 items-center`}>
				<Text>Intentos: {props.rounds}</Text>
				<Text>El numero era: {props.choice}</Text>
			</Card>
			<Button title="Jugar de nuevo" onPress={props.onRestart} />
		</View>
	);
};

export default GameOverScreen;
