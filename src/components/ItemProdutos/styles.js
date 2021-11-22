import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	padding: 0 2%;
	align-items: center;
	justify-content: center;
	margin: 10px;
`;

export const ProdutoImage = styled.Image`
	width: 180px;
	height: 150px;
`;

export const TextButton = styled.Text`
	font-family: ${theme.fonts.title700};
`;

export const ProdutoText = styled.Text`
	font-size: 16px;
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.title500};
`;

export const ProdutoPreco = styled.Text`
	font-weight: bold;
	color: ${theme.colors.preco};
	font-family: ${theme.fonts.title700};
`;

export const BtnAdd = styled.TouchableOpacity`
	margin-bottom: 5px;
	margin-top: 5px;
	width: 180px;
	padding: 5px;
	border-width: 1px;
	border-color: "#000";
	text-align: center;
	border-radius: 3px;
`;

export const ButtonBasic = styled.TouchableOpacity`
	margin-bottom: 5px;
`;

export const ViewPreco = styled.View``;
