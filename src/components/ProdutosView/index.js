import React from "react";
import { ContainerProdutos, ContainerItem } from "./styles";
import { useNavigation } from "@react-navigation/native";

import ItemProdutos from "../ItemProdutos";

const ProdutosView = ({ data }) => {
	const navigation = useNavigation();

	return (
		<ContainerProdutos>
			{data.map((item) => {
				return (
					<ContainerItem>
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
					</ContainerItem>
				);
			})}
		</ContainerProdutos>
	);
};

export default ProdutosView;
