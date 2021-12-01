import React, { useEffect, useState } from "react";
import {
	Animated,
	Keyboard,
	KeyboardAvoidingView,
	View,
	Text,
	Image,
} from "react-native";
import {
	Input,
	BtnRegister,
	TextBtn,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import ButtonMain from "../../components/ButtonMain";

const SignIn = ({ setLogado, setUsuario }) => {
	const navigation = useNavigation();

	const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
	const [opacity] = useState(new Animated.Value(0));
	const [opacityLogo] = useState(new Animated.Value(1));
	const [logo] = useState(new Animated.Value(250));

	useEffect(() => {
		KeyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			KeyboardDidShow
		);
		KeyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			KeyboardDidHide
		);

		Animated.parallel([
			Animated.spring(offset.y, {
				toValue: 0,
				speed: 4,
				boundiness: 20,
			}),
			Animated.timing(opacity, {
				toValue: 1,
				duration: 300,
			}),
		]).start();
	}, []); //colocar alguma coisa que mude sempre que abre a tela

	function KeyboardDidShow() {
		
		Animated.parallel([
			
			Animated.timing(logo, {
				toValue: 60,
				duration: 100,
			}),
				
			Animated.timing(opacityLogo, {
				toValue: 0,
				duration: 100,
			})
		]).start();
	}

	function KeyboardDidHide() {
		Animated.parallel([
			Animated.timing(logo, {
				toValue: 250,
				duration: 100,
			}),
			Animated.timing(opacityLogo, {
				toValue: 1,
				duration: 100,
			}),
		]).start();
	}

	const LoadUsuario = async (uid) => {
		await firebase
			.database()
			.ref("usuarios")
			.once("value", (snapshot) => {
				snapshot.forEach((item) => {
					if (item.key === uid) {
						let user = {
							uid: item.key,
							cep: item.val().cep,
							cpf: item.val().cpf,
							dataNascimento: item.val().dataNascimento,
							email: item.val().email,
							endereco: item.val().endereco,
							nome: item.val().nome,
							avatar: item.val().avatar,
							telefone: item.val().telefone,
						};
						setUsuario(user);
					}
				});
			});
	};

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const logar = async () => {
		await firebase
			.auth()
			.signInWithEmailAndPassword(email, senha)
			.then((value) => {
				setLogado(true);
				LoadUsuario(value.user.uid);
			})
			.catch((error) => {
				alert(error);
			});
	};

	const logarHome = () => {
		logar();
		navigation.navigate("Home");
	};

	return (
		<KeyboardAvoidingView
			style={{
				flex: 1,
				alignItems: "center",
				position: "relative",
				backgroundColor: `${theme.colors.tertiary}`,
				justifyContent: "center"
			}}
		>
			<Animated.Image style={{opacity: opacityLogo, position: "absolute", top: 60}}source={require("../../assets/logo.png")} />
			<Animated.View
				style={[
					{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						width: "75%",
						position: "absolute",
						top: logo,
						zIndex: 5
					},
					{
						opacity: opacity,
						transform: [
							{
								translateY: offset.y,
							},
						],
					},
				]}
			>
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

				<ButtonMain
					height={40}
					width={250}
					backgroundColor={`${theme.colors.primary}`}
					text="SignIn"
					textColor={`${theme.colors.secondary}`}
					borderWidth={1}
					onPress={logarHome}
				/>

				<BtnRegister>
					<TextBtn>Forgot Password?</TextBtn>
				</BtnRegister>

				<ButtonMain
					height={40}
					width={250}
					text="SignUp"
					textColor={`${theme.colors.primary}`}
					borderWidth={1}
					onPress={() => navigation.navigate("SignUp")}
				/>
			</Animated.View>
		</KeyboardAvoidingView>
	);
};

export default SignIn;
