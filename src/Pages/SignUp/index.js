import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	Animated,
	Keyboard,
	TouchableOpacity,
} from "react-native";
import {
	Bg,
	ContainerLogo,
	Input,
	BtnSubmit,
	BtnRegister,
	SubmitText,
	TextBtn,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import firebase from "../../firebaseConnection";

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
	},[]);

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
		await firebase.auth().createUserWithEmailAndPassword(email, senha).then((value)=>{
			alert('usuario criado' + value.user.email);
		}).catch((error) => {
			if(error.code === 'auth/weak-password'){
				alert('senha precisa de 6 digitos');
				return;
			}
			if (error.code === "auth/ivalid-email") {
				alert("email invalido");
				return;
			}else{
				alert(error);
				return;
			}
		})

		setEmail('');
		setSenha('');
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
				style={[
					styles.containerInputs,
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

				<BtnSubmit onPress={cadastrar}>
					<SubmitText>Sing Up</SubmitText>
				</BtnSubmit>

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

const styles = StyleSheet.create({
	containerInputs: {
		flex: 0.6,
		alignItems: "center",
		justifyContent: "center",
		width: "90%",
	},
});

export default SignUp;
