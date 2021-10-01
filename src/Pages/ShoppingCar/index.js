import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShoppingCar = () => {
	return (
		<View style={{ flex: 1 , alignItems:'center', justifyContent: 'center'}}>
			<Text>Seu carrinho está vazio</Text>
			<TouchableOpacity style={{alignSelf: 'flex-end'}}>
				<Text>Continuar Comprando</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ShoppingCar;
