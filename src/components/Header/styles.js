import styled from "styled-components/native";

export const Container = styled.View`
	height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 14px;
`;

export const MenuButton = styled.TouchableOpacity`
	width: 70px;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    color:'#fff';
	font-size: 30px;
    font-weight: bold;
`;

export const SearchButton = styled.TouchableOpacity`
	width: 70px;
	align-items: center;
	flex-direction: row;
`;
