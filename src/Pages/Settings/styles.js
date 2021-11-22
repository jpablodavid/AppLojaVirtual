import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
	flex: 1; 
	background-color: ${theme.colors.tertiary};
`;

export const Usuario = styled.View`
	flex-direction: row;
	height: 90px;
	border-bottom-width: 1px;
	border-top-width: 1px;
	border-color: ${theme.colors.primary};
	align-items: center;
	padding: 20px;
	background-color: ${theme.colors.secondary};
`;

export const Avatar = styled.Image`
	width: 60px; 
	height: 60px;
	border-radius: 30px; 
`;

export const Name = styled.Text`
	font-size: 22px;
	font-weight: bold;
	margin-left: 15px;
	margin-bottom: -15px;
	font-family: ${theme.fonts.title700};
`;

export const ContainerButton = styled.View`
	padding: 0 30px;
	padding-top: 100px;
`;