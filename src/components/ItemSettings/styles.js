import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	height: 70px;
	border-bottom-width: 1px;
	border-color: ${theme.colors.primary};
	justify-content: center;
	padding: 20px;
`;

export const ButtonMain = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

export const Title = styled.Text`
	margin-left: 10px;
	font-size: 16px;
	font-family: ${theme.fonts.title700};
`;
