import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	display: flex;
	flex-direction: row;
	padding: 10px;
	background-color: ${theme.colors.secondary};
	margin: 5px 0px;
	
`;

export const ImageCarrinho = styled.Image`
	width: 150px;
	height: 150px;
`;

export const ContainerCarrinho = styled.View`
	flex:1;
	margin-left: 10px;
	justify-content: space-between;
`;

export const ViewDirectionRow = styled.View`
	flex-direction: row;	
`;

export const ViewRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const ViewTitulo = styled.View`
    flex-wrap: wrap;
`;

export const Title = styled.Text`
	text-align: center;
	font-family: ${theme.fonts.text500};
	width: 150px;
`;

export const ButtonFechar = styled.TouchableOpacity`
	
`;

export const TextButton = styled.Text`
	color: ${theme.colors.primary};
	font-size: 18px;
	font-family: ${theme.fonts.title700};
`;

export const TextQuantidade = styled.Text`
	margin: 0 5px;
	font-size: 18px;
	color: #000;
	font-weight: bold;
`;

export const TextValor = styled.Text`
	font-size: 16px;
	font-family: ${theme.fonts.title700};
`;



export const ButtonBasic = styled.TouchableOpacity``;
