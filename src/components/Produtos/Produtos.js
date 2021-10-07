import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
		<TouchableOpacity onPress={onClick} style={styles.container}>
			<Image source={img} style={styles.produtosImg} />
			<Text style={styles.produtoText}>{filterDesc(children)}</Text>
			<View opacity={0.4}>
				<Text style={styles.produtoPreco}>{preco}</Text>
			</View>
		</TouchableOpacity>
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
		width: 150,
		height: 150,
	},
	produtoText: {
		fontSize: 16,
		color: `${theme.colors.primary}`,
	},
	produtoPreco: {
		fontWeight: 'bold',
		color: `${theme.colors.preco}`,
	},
});

export default Produtos;
