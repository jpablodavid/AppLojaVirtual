import React, { useState } from "react";
import {
	Container,
	ContainerCarrinho,
	ImageCarrinho,
	ButtonBasic,
	ButtonFechar,
	TextButton,
	ViewDirectionRow,
	Title,
	TextQuantidade,
	TextValor
} from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";


const ItemCarrinho = ({ data, deleteItem}) => {
	const { key, image, titulo, preco, size, quantidade, valorTotal } = data;


	const updateQuantidade = async (quantidade) => {
		
		await firebase
			.database()
			.ref("carrinho")
			.child(key)
			.update({
				quantidade: quantidade,
				valorTotal: preco * quantidade,
			});
	};

	const updateSize = async (size) => {
		await firebase
			.database()
			.ref("carrinho")
			.child(key)
			.update({
				size: size
			});
	};

	return (
		<Container>
			<ImageCarrinho source={image} />
			<ContainerCarrinho>
				<ViewDirectionRow>
					<Title>{titulo}</Title>
				</ViewDirectionRow>
				<Picker
					style={{
						width: "50%",
						border: "none",
						backgroundColor: `${theme.colors.tertiary}`,
					}}
					selectedValue={size}
					value={size}
					onValueChange={(itemValue, itemIndex) => updateSize(itemValue)}
				>
					<Picker.Item label="P" value="P" />
					<Picker.Item label="M" value="M" />
					<Picker.Item label="G" value="G" />
				</Picker>
				<ViewDirectionRow>
					<ButtonBasic
						onPress={() => {
							if (quantidade <= 1) {
								deleteItem();
							} else {
								updateQuantidade(quantidade - 1);
							}
						}}
					>
						<FontAwesome5
							name="minus-circle"
							size={24}
							color={`${theme.colors.primary}`}
						/>
					</ButtonBasic>
					<TextQuantidade>{quantidade}</TextQuantidade>
					<ButtonBasic
						onPress={() => {
							updateQuantidade(quantidade + 1);
						}}
					>
						<FontAwesome5
							name="plus-circle"
							size={24}
							color={`${theme.colors.primary}`}
						/>
					</ButtonBasic>
				</ViewDirectionRow>
			</ContainerCarrinho>
			<ButtonFechar onPress={() => deleteItem()}>
				<TextButton>X</TextButton>
			</ButtonFechar>
			<TextValor>R$ {valorTotal.toFixed(2)}</TextValor>
		</Container>
	);
};

export default ItemCarrinho;
