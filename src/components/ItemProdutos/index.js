import React from "react";
import {
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import firebase from '../../firebaseConnection';
import { Container , ProdutoImage, ProdutoText, ProdutoPreco, BtnAdd} from "./styles";


const ItemProdutos = ({ image, preco, titulo, size, descricao, details}) => {
	
	// const filterDesc = (titulo) => {
	// 	if (titulo.length < 27) {
	// 		return desc;
	// 	} else {
	// 		return `${titulo.substring(0, 23)}...`;
	// 	}
	let quantidade;

	const navigation = useNavigation();

	const carShopAdd = async (image, titulo, preco, size, quantidade) => {
		quantidade = 1;
		let carrinho = await firebase.database().ref('carrinho');
		let chave = carrinho.push().key;

		carrinho.child(chave).set({
			image: image,
			titulo: titulo,
			preco: preco,
			size: size,
			quantidade: quantidade,
		});
		navigation.navigate("MyBag");
	}

	return (
		<Container>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Details", { image, titulo, preco, descricao, details})
				}
			>
				<ProdutoImage source={image}/>
			</TouchableOpacity>

			<BtnAdd
				onPress={() => carShopAdd(image, titulo, preco, size, quantidade)}
			>
				<Text>ADCIONAR</Text>
			</BtnAdd>

			<ProdutoText numberOfLines={1}>
				{titulo}
			</ProdutoText>
			<View opacity={0.4}>
				<ProdutoPreco>R$ {preco.toFixed(2)}</ProdutoPreco>
			</View>
		</Container>
	);
};

export default ItemProdutos;
