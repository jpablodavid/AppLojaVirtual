import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.SafeAreaView`
	background-color: ${theme.colors.tertiary};
	flex: 1;
	padding: 4px 0;
`;

export const Title = styled.Text`
	font-size: 26;
	color: ${theme.colors.primary};
`;

export const ProdutosContainer = styled.FlatList`
	height: 250px;
`;
