import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.SafeAreaView`
	background-color: ${theme.colors.tertiary};
	flex: 1;
`;

export const ContainerProdutos = styled.ScrollView`
	flex: 1;
	margin-top: -90px;
`;

export const ViewSlider = styled.View`
 	/* top: 100px;
	left: 20px; */
`;
