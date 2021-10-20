import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Bg = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	background-color: ${theme.colors.tertiary};
`;

export const ContainerLogo = styled.View`
	flex: 0.4;
	justify-content: center;
`;

export const Input = styled.TextInput`
	background-color: rgba(100, 100, 100, 0.3);
	width: 90%;
	font-size: 17px;
	border-radius: 7px;
	padding: 10px;
	padding-left: 20px;
	margin-top: 15px;
`;

export const BtnRegister = styled.TouchableOpacity`
	margin-top: 15px;
	margin-bottom: 50px;
`;

export const TextBtn = styled.Text`
	color: ${theme.colors.primary};
	text-decoration: underline;
	font-weight: bold;
`;