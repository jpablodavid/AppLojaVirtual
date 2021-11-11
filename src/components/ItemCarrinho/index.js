import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

const ItemCarrinho = ({ data, deleteItem, calculaTotal, quant}) => {
	const {key, image, titulo, preco, size } = data;

	const [tamanho, setTamanho] = useState(size);

	const [quantidade, setQuantidade] = useState(quant);

	const [precoFinal, setPrecoFinal] = useState(preco);

	const updateQuantidade = async (quantidade) => {
		await firebase
			.database()
			.ref("carrinho")
			.child(key)
			.update({
				quantidade: quantidade,
			});
	};

	const showPreco = (precoFinal, quantidade) => {
		let valor = preco * quantidade;
		calculaTotal(valor);
		return valor;
	};

	return (
		<View
			style={{
				flexDirection: "row",
				marginBottom: 10,
				marginRight: 10,
				padding: 10,
				backgroundColor: `${theme.colors.secondary}`,
				position: "relative",
			}}
		>
			<Image style={{ width: 150, height: 150 }} source={image} />
			<View style={{ marginLeft: 10, justifyContent: "space-between" }}>
				<View style={{ flexDirection: "row" }}>
					<Text>{titulo}</Text>
				</View>
				<Picker
					style={{
						width: "50%",
						border: "none",
						backgroundColor: `${theme.colors.tertiary}`,
					}}
					selectedValue={tamanho}
					value={size}
					onValueChange={(itemValue, itemIndex) => setTamanho(itemValue)}
				>
					<Picker.Item label="P" value="Pequeno" />
					<Picker.Item label="M" value="Medio" />
					<Picker.Item label="G" value="Grande" />
				</Picker>
				<View style={{ flexDirection: "row" }}>
					<TouchableOpacity
						onPress={() => {
							if (quantidade <= 1) {
								deleteItem();
							} else {
								setQuantidade(quantidade - 1);
								setPrecoFinal(preco * quantidade);
								updateQuantidade(quantidade - 1);
							}
						}}
					>
						<FontAwesome5
							name="minus-circle"
							size={24}
							color={`${theme.colors.primary}`}
						/>
					</TouchableOpacity>
					<Text
						style={{
							marginLeft: 5,
							marginRight: 5,
							fontSize: 18,
							color: "#000",
							fontWeight: "bold",
						}}
					>
						{quantidade}
					</Text>
					<TouchableOpacity
						onPress={() => {
							setQuantidade(quantidade + 1);
							setPrecoFinal(preco * quantidade);
							updateQuantidade(quantidade + 1);
						}}
					>
						<FontAwesome5
							name="plus-circle"
							size={24}
							color={`${theme.colors.primary}`}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity
				style={{ position: "absolute", right: 10, top: 10 }}
				onPress={() => deleteItem()}
			>
				<Text style={{ fontWeight: "bold", fontSize: 18 }}>X</Text>
			</TouchableOpacity>
			<Text
				style={{
					position: "absolute",
					right: 10,
					bottom: 10,
					fontWeight: "bold",
					fontSize: 16,
				}}
			>
				R$ {showPreco(precoFinal, quantidade).toFixed(2)}
			</Text>
		</View>
	);
};

export default ItemCarrinho;
