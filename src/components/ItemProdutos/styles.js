import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	padding: 0 2%;
	align-items: center;
	justify-content: center;
	margin: 10px;
`;

export const ProdutoImage = styled.Image`
	width: 175px;
	height: 150px;
`;

export const ProdutoText = styled.Text`
	font-size: 16px;
    color: ${theme.colors.primary};
`;

export const ProdutoPreco = styled.Text`
	font-weight: bold;
	color: ${theme.colors.preco};
`;

export const BtnAdd = styled.TouchableOpacity`
	margin-bottom: 5px;
    margin-top: 5px;
    width: 100%;
    padding: 5px;
    border-width: 1px;
    border-color: "#000";
    text-align: center;
    border-radius: 3px;
`;

