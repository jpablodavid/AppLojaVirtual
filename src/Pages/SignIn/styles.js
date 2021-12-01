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

export const BtnRegister = styled.TouchableOpacity`
	align-self: center;
	margin: 10px;
`;

export const TextBtn = styled.Text`
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.title500};
`;

