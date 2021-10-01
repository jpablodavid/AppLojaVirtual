import React, { useEffect, useState } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StyleSheet,
	Animated,
	Keyboard,
} from "react-native";

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
		<KeyboardAvoidingView style={styles.bg}>
			<View style={styles.containerLogo}>
				<Animated.Image
					style={{ width: logo.x, height: logo.y }}
					source={require("../../assets/logo.png")}
				/>
			</View>

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
				<TextInput
					style={styles.input}
					placeholder="Email"
					autoCorrect={false}
					onChangeText={() => {}}
				/>
				<TextInput
					style={styles.input}
					placeholder="Senha"
					autoCorrect={false}
					onChangeText={() => {}}
				/>

				<TouchableOpacity style={styles.btnSubmit}>
					<Text style={styles.submitText}>Sing in</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.btnRegister}>
					<Text style={{ color: "#fff" }}>Forgot Password?</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.btnNewAccount}>
					<Text style={{ color: "#fff" }}>Create New Account</Text>
				</TouchableOpacity>
			</Animated.View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#353535",
	},
	containerLogo: {
		flex: 0.4,
		justifyContent: "center",
	},
	containerInputs: {
		flex: 0.6,
		alignItems: "center",
		justifyContent: "center",
		width: "90%",
	},
	input: {
		backgroundColor: "rgba(100,100,100,.3)",
		width: "90%",
		fontSize: 17,
		borderRadius: 18,
		padding: 10,
		paddingLeft: 20,
		marginTop: 15,
	},
	btnSubmit: {
		backgroundColor: "#35aaff",
		width: "90%",
		height: 45,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 18,
		marginTop: 15,
	},
	submitText: {
		color: "#fff",
		fontSize: 18,
	},
	btnRegister: {
		marginTop: 15,
		marginBottom: 50,
	},
	btnNewAccount: {
		borderRadius: 18,
		borderWidth: 1,
		borderColor: "#191919",
		padding: 15,
		width: "90%",
		alignItems: "center",
	},
});
export default MyAccount;
