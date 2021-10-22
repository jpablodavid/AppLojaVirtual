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

import { theme } from "../../global/styles/theme";


const Produtos = ({ img, preco, titulo , desc}) => {
	
	// const filterDesc = (titulo) => {
	// 	if (titulo.length < 27) {
	// 		return desc;
	// 	} else {
	// 		return `${titulo.substring(0, 23)}...`;
	// 	}
	// };

	const navigation = useNavigation();

	const carShopAdd = async (img, titulo, preco, desc) => {

		let carrinho = await firebase.database().ref('carrinho');
		let chave = carrinho.push().key;

		carrinho.child(chave).set({
			imagem: img,
			titulo: titulo,
			preco: preco,
			tamanho: '',
			descricao: desc,
		});
		navigation.navigate("MyBag");
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Details", { img, titulo, preco, desc})
				}
			>
				<Image source={img} style={styles.produtosImg} />
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.btnAdd}
				onPress={() => carShopAdd(img, titulo, preco, desc)}
			>
				<Text>ADCIONAR</Text>
			</TouchableOpacity>

			<Text numberOfLines={1} style={styles.produtoText}>
				{titulo}
			</Text>
			<View opacity={0.4}>
				<Text style={styles.produtoPreco}>R$ {preco}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: "2%",
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	produtosImg: {
		width: 190,
		height: 150,
		elevation: 2,
	},
	produtoText: {
		fontSize: 16,
		color: `${theme.colors.primary}`,
	},
	produtoPreco: {
		fontWeight: "bold",
		color: `${theme.colors.preco}`,
	},
	btnAdd:{
		marginBottom: 5,
		marginTop:5,
		width: '100%',
		padding: 5,
		borderWidth: 1,
		borderColor: "black",
		textAlign: 'center',
		borderRadius: 3

	}
});

export default Produtos;
