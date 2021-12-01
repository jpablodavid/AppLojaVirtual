import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Loading = styled.View`
	flex: 1;
	justify-content: center;
`;

export const Container = styled.View`
	flex: 1;
	background-color: ${theme.colors.tertiary};
`;

export const ContainerCarShop = styled.View`
	flex: 1;
	padding: 10px;
`;

export const CarShopView = styled.FlatList`
	flex: 1;
`;


export const ViewInfo = styled.View`
	margin-bottom: 10px;
`;

export const Texts = styled.Text`
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.text500};
`;

export const TextDate = styled.Text`
	font-size: 15px;
	margin-left: 3px;
	font-family: ${theme.fonts.title700};
`;

export const ContainerVazio = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const TextVazio = styled.Text`
	text-align: center;
	margin-top: 20px;
	font-size: 22px;
	font-weight: bold;
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.text400};
`;

export const ContainerBottom = styled.View`
	flex: 0.4;
	justify-content: space-between;
	padding: 10px 5px;
	border: 1px solid ${theme.colors.secondary};
`;

export const ViewValores = styled.View``;
export const ViewButton = styled.View`
	align-items: center;
`;

export const ItemValor = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const TextPadrao = styled.Text`
	font-family: ${theme.fonts.text400};
`;

export const TextValor = styled.Text`
	font-weight: bold;
	font-family: ${theme.fonts.text500};
`;
