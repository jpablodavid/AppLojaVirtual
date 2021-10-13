import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.SafeAreaView`
	background-color: ${theme.colors.tertiary};
	flex: 1;
	padding: 4px 0;
`;

export const TitleContainer = styled.View`
	align-items: center;
	justify-content: center;
	background-color: ${theme.colors.secondary};
	padding-bottom: 5px;
	margin-bottom: 5px;
	box-shadow: 0px 1px #888888;
`;

export const Title = styled.Text`
	font-size: 26 ;
	color: ${theme.colors.primary};
`;


export const ProdutosContainer = styled.FlatList`
	height: 250px; 
`;