import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Seguir = () => {
	return (
		<View style={styles.centeredView}>
			<View style={styles.modalView}>
				<Text style={styles.modalText}>Abrir Instagram</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default Seguir;
