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
	box-shadow: 0px 2px #888888;
`

export const MenuButton = styled.TouchableOpacity`
	
`

export const Title = styled.Text`
	color:${theme.colors.secondary};
	font-size: 30px;
	font-weight: bold;
`

export const SearchButton = styled.TouchableOpacity`
	
`
