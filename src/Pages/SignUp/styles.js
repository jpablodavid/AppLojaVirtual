import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Input = styled.TextInput`
	background-color: rgba(100, 100, 100, 0.3);
	width: 90%;
	margin-bottom: 15;
	font-size: 17px;
	border-radius: 7px;
	padding: 10px;
	font-family: ${theme.fonts.text400};
`;


export const ContainerSign = styled.View`
	flex-direction: row;
	justify-content: center;
	margin-top: 10px;
`;

export const ButtonSign = styled.TouchableOpacity`
	align-self: center;
	padding-bottom: 10px;
`;

export const TextBtn = styled.Text`
	color: ${theme.colors.primary};
	text-decoration: underline;
	font-family: ${theme.fonts.title700};
`;

export const TextPadrao = styled.Text`
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.text400};
`;