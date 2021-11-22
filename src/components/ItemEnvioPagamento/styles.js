import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex-direction: row;
	padding-left: 10px;
	background-color: ${theme.colors.tertiary};
	margin: 3px 0px;
	position: relative;
	border-bottom: 1px solid ${theme.colors.secondary};
`;

export const ImageCarrinho = styled.Image`
	width: 100px;
	height: 100px;
`;

export const ContainerCarrinho = styled.View`
	margin-left: 10px;
	justify-content: space-between;
`;

export const ViewItens = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: space-between;
`;


export const TextQuantidade = styled.Text`
	color: "#000";
`;

export const TextPadrao = styled.Text`
`;

export const TextValor = styled.Text`
	font-family: ${theme.fonts.title500};
	
`;

export const Title = styled.Text``;

export const Tamanho = styled.Text``;


