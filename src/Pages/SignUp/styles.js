import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Bg = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	justify-content: center;
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
	border-radius: 18px;
	padding: 10px;
	padding-left: 20px;
	margin-top: 15px;
`;
export const BtnSubmit = styled.TouchableOpacity`
	background-color: ${theme.colors.primary};
	width: 90%;
	height: 45px;
	align-items: center;
	justify-content: center;
	border-radius: 18px;
	margin-top: 50px;
`;
export const SubmitText = styled.Text`
	color: ${theme.colors.tertiary};
	font-size: 18px;
`;

export const BtnRegister = styled.TouchableOpacity`
	margin-top: 15px;
	margin-bottom: 50px;
`;
export const BtnNewAccount = styled.TouchableOpacity`
	border-radius: 18px;
	border-width: 1px;
	border-color: ${theme.colors.secondary};
	padding: 15px;
	width: 90%;
	align-items: center;
`;
export const TextBtn = styled.Text`
	color: ${theme.colors.primary};
	font-weight: bolder;
	text-decoration: underline;
`;

