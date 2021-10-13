import styled from "styled-components/native";

import { theme } from '../../global/styles/theme'

export const Container = styled.SafeAreaView`
	height: 60px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	background-color: ${theme.colors.primary};
	box-shadow: 0px 1px #888888;
	margin-bottom: 5px;
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
