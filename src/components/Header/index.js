import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, MenuButton, Title, SearchButton } from "./styles";

import { useNavigation } from "@react-navigation/native";

const Header = ({ back, onClick }) => {

	const navigation = useNavigation();
    
	return (
		<Container>
			{back ? (
				<MenuButton onPress={() => navigation.goBack()}>
					<Feather name="arrow-left" size={24} color="#fbf7e4" />
				</MenuButton>
			) : (
				<MenuButton onPress={onClick}>
					<Feather name="menu" size={24} color="#fbf7e4" />
				</MenuButton>
			)}
			<Title>HARMONI</Title>
			<SearchButton onPress={() => alert("abre pesquisa")}>
				<Feather name="search" size={24} color="#fbf7e4" />
			</SearchButton>
		</Container>
	);
};

export default Header;
