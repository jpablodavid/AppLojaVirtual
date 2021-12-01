import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
    display: flex;
    flex: 1; 
	background-color: ${theme.colors.tertiary};
`;

export const ContainerInfo = styled.ScrollView`
`;

export const ViewItem = styled.View`
	padding: 5px 10px;
`;

export const Title = styled.Text`
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.title500};
`;

export const TextBold = styled.Text`
	font-weight: bold;
	font-family: ${theme.fonts.text500};
`;

export const ViewSize = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	border-bottom-width: 1px;
	border-top-width: 1px;
	border-color: ${theme.colors.primary};
	width: 100%;
`;

export const ViewButton = styled.View`
	justify-content: center;
	padding: 18px 40px;
	border-top-width: 1px;
	border-color: ${theme.colors.primary};
`;

