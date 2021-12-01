import React from "react";
import {
	Container,
	ContainerCarrinho,
	ImageCarrinho,
	ButtonBasic,
	ButtonFechar,
	TextButton,
	ViewRow,
	ViewDirectionRow,
	ViewTitulo,
	Title,
	TextQuantidade,
	TextValor,
} from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

const ItemCarrinho = ({ data, deleteItem }) => {
	const { key, image, titulo, preco, size, quantidade } = data;

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
		await firebase.database().ref("carrinho").child(key).update({
			size: size,
		});
	};

	return (
		<Container>
			<ImageCarrinho source={image} />
			<ContainerCarrinho>
				<ViewRow>
					<ViewTitulo>
						<Title numberOfLines={1}>{titulo}</Title>
					</ViewTitulo>
					<ButtonFechar onPress={() => deleteItem()}>
						<TextButton>X</TextButton>
					</ButtonFechar>
				</ViewRow>

				<Picker
					style={{
						width: 80,
						postion: "absolute",
						padding: 10,
						borderWidth: 1,
						borderColor: "#000",
					}}
					mode="dropdown"
					itemStyle={{
						fontWeight: "900",
						fontSize: 18,
						padding: 30,
					}}
					selectedValue={size}
					value={size}
					onValueChange={(itemValue) => updateSize(itemValue)}
				>
					<Picker.Item label="P" value="P" />
					<Picker.Item label="M" value="M" />
					<Picker.Item label="G" value="G" />
				</Picker>

				<ViewRow>
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
					<TextValor>R$ {(preco * quantidade).toFixed(2)}</TextValor>
				</ViewRow>
			</ContainerCarrinho>
		</Container>
	);
};

export default ItemCarrinho;
