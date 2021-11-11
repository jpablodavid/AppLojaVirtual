import React from "react";
import { ProdutosContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import ItemProdutos from "../ItemProdutos";

const ProdutosView = ({ data }) => {
	const navigation = useNavigation();

	return (
		<ProdutosContainer>
			{data.map((item) => {
				return (
					<View style={{width: '50%'}}>
						<ItemProdutos
							image={{
								uri: `${item.image}`,
							}}
							preco={item.preco}
							descricao={item.desc}
							titulo={item.titulo}
							details={item.details}
							size={item.size}
						/>
					</View>
				);
			})}
		</ProdutosContainer>
	);
};

export default ProdutosView;
