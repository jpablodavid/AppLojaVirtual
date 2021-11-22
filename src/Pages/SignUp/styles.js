import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Bg = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	background-color: ${theme.colors.tertiary};
	padding: 30px;
`;

export const ContainerLogo = styled.View`
	flex: 0.4;
	justify-content: center;
	margin-bottom: 50px;
`;

export const Input = styled.TextInput`
	background-color: rgba(100, 100, 100, 0.3);
	width: 100%;
	font-size: 17px;
	border-radius: 7px;
	padding: 10px;
	padding-left: 20px;
	font-family: ${theme.fonts.text400};
`;

export const ContainerLogin = styled.View`
	padding-top: 30px;
	height: 180px;
	justify-content: space-between;
`;

export const ContainerSign = styled.View`
	flex-direction: row;
	justify-content: center;
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