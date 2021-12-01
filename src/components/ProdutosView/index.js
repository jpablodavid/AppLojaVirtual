import React from "react";
import { ContainerProdutos, ContainerItem } from "./styles";

import ItemProdutos from "../ItemProdutos";

const ProdutosView = ({ data }) => {

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
						/>
					</ContainerItem>
				);
			})}
		</ContainerProdutos>
	);
};

export default ProdutosView;
