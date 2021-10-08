import styled from "styled-components/native";

import { theme } from '../../global/styles/theme'

export const Container = styled.View`
	height: 60px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-left: 15px;
	padding-right: 15px;
	background-color: ${theme.colors.primary};
	border-bottom: .2;
	box-shadow: 1px, 0, black;
`;

export const MenuButton = styled.TouchableOpacity`
	
`

export const Title = styled.Text`
	color:${theme.colors.secondary};
	font-size: 30px;
	font-weight: bold;
`

export const SearchButton = styled.TouchableOpacity`
	
`
