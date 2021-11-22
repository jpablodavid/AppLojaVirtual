import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex-direction: row;
	padding: 10px;
	background-color: ${theme.colors.secondary};
	margin: 5px 0px;
	position: relative;
`;

export const ImageCarrinho = styled.Image`
	width: 150px;
	height: 150px;
`;

export const ContainerCarrinho = styled.View`
	margin-left: 10px;
	justify-content: space-between;
`;

export const ViewDirectionRow = styled.View`
	flex-direction: row;
`;
export const ButtonFechar = styled.TouchableOpacity`
	position: absolute;
	right: 10px;
	top: 10px;
`;

export const TextButton = styled.Text`
	color: ${theme.colors.primary};
	font-size: 18px;
	font-weight: bold;
	font-family: ${theme.fonts.title700};
`;

export const TextQuantidade = styled.Text`
	margin: 0 5px;
	font-size: 18px;
	color: "#000";
	font-weight: bold;
`;

export const TextValor = styled.Text`
	position: absolute;
	right: 10px;
	bottom: 10px;
	font-weight: bold;
	font-size: 16px;
	font-family: ${theme.fonts.title500};
`;

export const Title = styled.Text`
	font-family: ${theme.fonts.text500};
`;

export const ButtonBasic = styled.TouchableOpacity``;
