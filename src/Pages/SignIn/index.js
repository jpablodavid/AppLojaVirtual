import React, { useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	Animated,
	Keyboard,
} from "react-native";
import {
	Bg,
	ContainerLogo,
	Input,
	BtnRegister,
	TextBtn,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import ButtonMain from '../../components/ButtonMain';


const SignIn = ({setLogado}) => {

	const navigation = useNavigation();

	const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
	const [opacity] = useState(new Animated.Value(0));
	const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));

	useEffect(() => {
		const KeyboardShow = Keyboard.addListener("keybordShow", KeyboardShow);
		const KeyboardHide = Keyboard.addListener("keybordHide", KeyboardHide);

		Animated.parallel([
			Animated.spring(offset.y, {
				toValue: 0,
				speed: 2,
				boundiness: 20,
			}),
			Animated.timing(opacity, {
				toValue: 1,
				duration: 300,
			}),
		]).start();
	},[]);//colocar alguma coisa que mude sempre que abre a tela

	const KeyboardShow = () => {
		alert("teclado Aberto");
		Animated.parallel([
			Animated.timing(logo.x, {
				toValue: 55,
				duration: 100,
			}),
			Animated.timing(logo.y, {
				toValue: 65,
				duration: 100,
			}),
		]).start();
	};

	const KeyboardHide = () => {
		alert("teclado Fechado");
		Animated.parallel([
			Animated.timing(logo.x, {
				toValue: 130,
				duration: 100,
			}),
			Animated.timing(logo.y, {
				toValue: 155,
				duration: 100,
			}),
		]).start();
	};

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const logar = async () => {
		await firebase.auth().signInWithEmailAndPassword(email, senha).then((value) => {
			alert('Bem vindo' + value.user.email);
			setLogado(true);
			navigation.navigate("Home");
			
		}).catch((error) => {
			alert(error)
		})
	}

	return (
		<Bg>
			<ContainerLogo>
				<Animated.Image
					style={{ width: logo.x, height: logo.y }}
					source={require("../../assets/logo.png")}
				/>
			</ContainerLogo>

			<Animated.View
				style={{
					flex: 0.6,
					justifyContent: "space-around",
					width: "100%",
					opacity: opacity,
					transform: [
						{
							translateY: offset.y,
						},
					],
				}}
			>
				<View style={{ alignItems: "center" }}>
					<Input
						placeholder="Email"
						autoCorrect={false}
						onChangeText={(text) => setEmail(text)}
						value={email}
					/>
					<Input
						placeholder="Senha"
						autoCorrect={false}
						onChangeText={(text) => setSenha(text)}
						value={senha}
					/>
				</View>

				<View style={{paddingHorizontal:25}}>
					<ButtonMain
						height={40}
						width='100%'
						backgroundColor={`${theme.colors.primary}`}
						text="SignIn"
						textColor={`${theme.colors.secondary}`}
						borderWidth={1}
						onPress={logar}
					/>

					<View style={{alignSelf:'center'}}>
						<BtnRegister>
							<TextBtn>Forgot Password?</TextBtn>
						</BtnRegister>
					</View>

					<ButtonMain
						height={40}
						width="100%"
						text="SignUp"
						textColor={`${theme.colors.primary}`}
						borderWidth={1}
						onPress={() => navigation.navigate("SignUp")}
					/>
				</View>
			</Animated.View>
		</Bg>
	);
};

const styles = StyleSheet.create({
	containerInputs: {
		flex: 0.6,
		alignItems: "center",
		justifyContent: "center",
		width: "90%",
	},
});
export default SignIn;
