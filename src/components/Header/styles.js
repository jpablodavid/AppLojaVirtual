import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.SafeAreaView`
	height: 60px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	background-color: ${theme.colors.primary};
	box-shadow: 0px 1px #888888;
	margin-bottom: 5px;
`;

export const ViewHeader = styled.View`
	width: 90%;
`;
export const ViewSearch = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Logo = styled.Image`
	width: 70px; 
	height: 100px;
	justify-self: flex-start;
	margin-left: -15px;

`;

export const Marca = styled.Text`
	color: ${theme.colors.secondary};
	font-size: 35px;
	font-weight: bold;
	font-family: ${theme.fonts.title700};
`;

export const InputSearch = styled.TextInput`
	background-color: rgba(100, 100, 100, 0.7);
	width: 100%;
	font-size: 16px;
	border-radius: 7px;
	padding: 5px;
	margin-left: 20px;
`;

export const MenuButton = styled.TouchableOpacity``;

export const Title = styled.Text`
	color: ${theme.colors.secondary};
	font-size: 28px;
	font-weight: bold;
	margin-left: 10px;
	font-family: ${theme.fonts.title700};
`;

export const SearchButton = styled.TouchableOpacity``;
