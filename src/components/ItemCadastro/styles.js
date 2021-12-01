import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	height: 65px;
	border-bottom-width: 1px;
	border-color: ${theme.colors.primary};
	justify-content: center;
	padding: 5px;
`;

export const Input = styled.TextInput`
	font-size: 17px;
	border-radius: 7px;
	padding: 5px;
	font-family: ${theme.fonts.text400};
`;

