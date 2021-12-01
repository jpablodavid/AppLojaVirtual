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
	ButtonSign,
	TextBtn,
	TextPadrao,
	ContainerSign,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import ButtonMain from "../../components/ButtonMain";

const SignUp = () => {
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
	}, []);

	function KeyboardDidShow() {
		Animated.parallel([
			Animated.timing(logo, {
				toValue: 60,
				duration: 100,
			}),

			Animated.timing(opacityLogo, {
				toValue: 0,
				duration: 100,
			}),
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

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const cadastrar = async () => {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, senha)
			.then((value) => {
				
				let uid = value.user.uid;
				let email = value.user.email;
				navigation.navigate("Cadastro", { uid, email, senha });
			})
			.catch((error) => {
				if (error.code === "auth/weak-password") {
					alert("senha precisa de 6 digitos");
					return;
				}
				if (error.code === "auth/ivalid-email") {
					alert("email invalido");
					return;
				} else {
					alert(error);
					return;
				}
			});
	};

	return (
		
		<KeyboardAvoidingView
			style={{
				flex: 1,
				alignItems: "center",
				position: "relative",
				backgroundColor: `${theme.colors.tertiary}`,
				justifyContent: "center",
			}}
		>
			<Animated.Image
				style={{ opacity: opacityLogo, position: "absolute", top: 60 }}
				source={require("../../assets/logo.png")}
			/>
			<Animated.View
				style={[
					{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						width: "75%",
						position: "absolute",
						top: logo,
						zIndex: 5,
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
					text="Sign Up"
					textColor={`${theme.colors.secondary}`}
					borderWidth={1}
					onPress={cadastrar}
				/>

				<ContainerSign>
					<TextPadrao>Já Sou cadastrado </TextPadrao>
					<ButtonSign onPress={() => navigation.navigate("SignIn")}>
						<TextBtn>Sing In</TextBtn>
					</ButtonSign>
				</ContainerSign>
			</Animated.View>
		</KeyboardAvoidingView>
	);
};

export default SignUp;
