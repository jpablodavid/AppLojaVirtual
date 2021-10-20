import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	Animated,
	Keyboard,
	TouchableOpacity,
} from "react-native";
import {
	Bg,
	ContainerLogo,
	Input,
	TextBtn
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import ButtonMain from "../../components/ButtonMain";


const SignUp = () => {
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
	}, []);

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

	const cadastrar = async () => {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, senha)
			.then((value) => {
				//alert('usuario criado' + value.user.email);
				let uid = value.user.uid;
				let email = value.user.email;
				navigation.navigate("Cadastro", { uid, email });
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

				<View style={{paddingHorizontal: 25}}>
					<ButtonMain
						height={40}
						width="100%"
						backgroundColor={`${theme.colors.primary}`}
						text="Sign Up"
						textColor={`${theme.colors.secondary}`}
						borderWidth={1}
						onPress={cadastrar}
					/>
				</View>
				

				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text>Já Sou cadastrado </Text>
					<TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
						<TextBtn>Sing In</TextBtn>
					</TouchableOpacity>
				</View>
			</Animated.View>
		</Bg>
	);
};


export default SignUp;
