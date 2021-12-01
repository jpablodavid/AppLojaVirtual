import React from "react";
import { useNavigation } from "@react-navigation/core";
import firebase from "../../firebaseConnection";
import {
	Container,
	ProdutoImage,
	ProdutoText,
	ProdutoPreco,
	ButtonBasic,
	ViewPreco,
} from "./styles";

import ButtonMain from '../ButtonMain';

const ItemProdutos = ({ image, preco, titulo, descricao, details }) => {

	const navigation = useNavigation();

	const carShopAdd = async (image, titulo, preco) => {
		let quantidade = 1;
		let valorTotal = preco * quantidade;
		let carrinho = await firebase.database().ref("carrinho");
		let chave = carrinho.push().key;

		carrinho.child(chave).set({
			image: image,
			titulo: titulo,
			preco: preco,
			size: "P",
			quantidade: quantidade,
			valorTotal: valorTotal,
		});
		navigation.navigate("MyBag");
	};

	return (
		<Container>
			<ButtonBasic
				onPress={() =>
					navigation.navigate("Details", {
						image,
						titulo,
						preco,
						descricao,
						details,
					})
				}
			>
				<ProdutoImage source={image} />
			</ButtonBasic>

			<ButtonMain
				height={35}
				width={150}
				text={"Adicionar"}
				textColor={"#000"}
				borderWidth={1}
				onPress={() => carShopAdd(image, titulo, preco)}
			/>

			<ProdutoText numberOfLines={1}>{titulo}</ProdutoText>
			<ViewPreco opacity={0.4}>
				<ProdutoPreco>R$ {preco.toFixed(2)}</ProdutoPreco>
			</ViewPreco>
		</Container>
	);
};

export default ItemProdutos;
