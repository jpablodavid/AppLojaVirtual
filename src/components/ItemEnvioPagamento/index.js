import React from "react";
import {
	Container,
	ContainerCarrinho,
	ImageCarrinho,
	Title,
	TextQuantidade,
	TextValor,
	Tamanho,
	ViewItens,
	TextPadrao
} from "./styles";


const ItemEnvioPagamento = ({ data }) => {
	const { image, titulo, size, quantidade, valorTotal } = data;

	return (
		<Container>
			<ImageCarrinho source={image} />
			<ContainerCarrinho>
				<Title>{titulo}</Title>

				<Tamanho>Tamanho:{size}</Tamanho>

				<ViewItens>
					<TextQuantidade>Itens: {quantidade}</TextQuantidade>
					<TextValor>R$ {valorTotal.toFixed(2)}</TextValor>
				</ViewItens>
			</ContainerCarrinho>
		</Container>
	);
};

export default ItemEnvioPagamento;
