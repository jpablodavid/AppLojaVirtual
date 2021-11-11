import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import firebase from '../../firebaseConnection';

// import { theme } from "../../global/styles/theme";
import { Container , ProdutoImage, ProdutoText, ProdutoPreco, BtnAdd} from "./styles";


const ItemProdutos = ({ image, preco, titulo, size, descricao, details}) => {
	
	// const filterDesc = (titulo) => {
	// 	if (titulo.length < 27) {
	// 		return desc;
	// 	} else {
	// 		return `${titulo.substring(0, 23)}...`;
	// 	}

	const navigation = useNavigation();

	const carShopAdd = async (image, titulo, preco, size) => {

		let carrinho = await firebase.database().ref('carrinho');
		let chave = carrinho.push().key;

		carrinho.child(chave).set({
			image: image,
			titulo: titulo,
			preco: preco,
			size: "P",
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
				onPress={() => carShopAdd(image, titulo, preco, size)}
			>
				<Text>ADCIONAR</Text>
			</BtnAdd>

			<ProdutoText numberOfLines={1}>
				{titulo}
			</ProdutoText>
			<View opacity={0.4}>
				<ProdutoPreco>R$ {preco}</ProdutoPreco>
			</View>
		</Container>
	);
};

export default ItemProdutos;
