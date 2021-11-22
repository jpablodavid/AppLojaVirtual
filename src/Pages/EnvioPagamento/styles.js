import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex: 1;
	background-color: ${theme.colors.tertiary};
`;

export const ContainerDados = styled.ScrollView`
`;

export const Titulo = styled.View`
	height: 45px;
    background-color: ${theme.colors.secondary};
    justify-content: "center";
    padding-left: 15px;
`;

export const TextTitulo = styled.Text`
    font-size: 16px;
    font-family: ${theme.fonts.title700};
`;

export const Opcao = styled.View`
	height: 90px;
	padding-left: 15px;
	justify-content: "center";
`; 

export const CarshopView = styled.FlatList`
	flex: 1;
`;

export const ContainerBottom = styled.View`
	justify-content: space-between;
	padding: 10px;
	margin: 10px;
	border: 1px solid ${theme.colors.secondary};
`;

export const ViewValores = styled.View`
	margin-bottom: 30px;
`;
export const ViewButton = styled.View`
	align-items: center;
`;

export const ItemValor = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const TextValor = styled.Text`
	font-weight: bold;
`;

export const Title = styled.Text``;





