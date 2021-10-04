import React, { useEffect, useState } from "react";
import {
	Text,
	StyleSheet,
	Animated,
	Keyboard,
} from "react-native";
import {
	Bg,
	ContainerLogo,
	Input,
	BtnSubmit,
	SubmitText,
	BtnRegister,
	BtnNewAccount,
} from "./styles";

const MyAccount = () => {
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

	return (
		<Bg>
			<ContainerLogo>
				<Animated.Image
					style={{ width: logo.x, height: logo.y }}
					source={require("../../assets/logo.png")}
				/>
			</ContainerLogo>

			<Animated.View
				style={[styles.containerInputs,
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
					onChangeText={() => {}}
				/>
				<Input
					placeholder="Senha"
					autoCorrect={false}
					onChangeText={() => {}}
				/>

				<BtnSubmit>
					<SubmitText>Sing in</SubmitText>
				</BtnSubmit>

				<BtnRegister>
					<Text style={{ color: "#fff" }}>Forgot Password?</Text>
				</BtnRegister>

				<BtnNewAccount>
					<Text style={{ color: "#fff" }}>Create New Account</Text>
				</BtnNewAccount>
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
export default MyAccount;
