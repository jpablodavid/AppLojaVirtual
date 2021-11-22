import React, { useEffect, useState } from "react";
import { Animated, Keyboard } from "react-native";
import { Bg, ContainerLogo, Input, BtnRegister, TextBtn, ContainerLogin } from "./styles";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import ButtonMain from "../../components/ButtonMain";


const SignIn = ({ setLogado, setUsuario }) => {
	const navigation = useNavigation();

	const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
	const [opacity] = useState(new Animated.Value(0));
	const [logo] = useState(new Animated.ValueXY({ x: 130, y: 400 }));

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
	}, []); //colocar alguma coisa que mude sempre que abre a tela

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

	const LoadUsuario = async (uid) => {
		await firebase
			.database()
			.ref("usuarios")
			.once("value", (snapshot) => {
				setUsuario({});
				snapshot.forEach((item) => {
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
				alert("Bem vindo" + value.user.uid);
				LoadUsuario(value.user.uid);
				setLogado(true);
				navigation.navigate("Home");
			})
			.catch((error) => {
				alert(error);
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
					opacity: opacity,
					alignItems: "center",
					transform: [
						{
							translateY: offset.y,
						},
					],
				}}
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

				<ContainerLogin>
					<ButtonMain
						height={40}
						width={250}
						backgroundColor={`${theme.colors.primary}`}
						text="SignIn"
						textColor={`${theme.colors.secondary}`}
						borderWidth={1}
						onPress={logar}
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
				</ContainerLogin>
			</Animated.View>
		</Bg>
	);
};

export default SignIn;
