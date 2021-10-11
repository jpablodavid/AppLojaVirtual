import React from "react";
import {
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import { theme } from "../../global/styles/theme";

const Produtos = ({ img, preco, children, onClick }) => {
	const filterDesc = (desc) => {
		if (desc.length < 27) {
			return desc;
		} else {
			return `${desc.substring(0, 23)}...`;
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onClick}>
				<Image source={{ uri: img }} style={styles.produtosImg} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.btnAdd} onPress={() => alert('modal baixo')}>
				<Text>ADCIONAR</Text>
			</TouchableOpacity>
			<Text style={styles.produtoText}>{filterDesc(children)}</Text>
			<View opacity={0.4}>
				<Text style={styles.produtoPreco}>{preco}</Text>
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
