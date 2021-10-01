import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, MenuButton, Title, SearchButton } from "./styles";


const Header = ({ back }) => {

	return (
		<Container>
			{back ? (
				<MenuButton onPress={() => alert('back')}>
					<Feather name="arrow-left" size={36} color="red" />
				</MenuButton>
			) : (
				<MenuButton onPress={() => alert("abre menu produtos")}>
					<Feather name="menu" size={36} color="red" />
				</MenuButton>
			)}

			<Title>Lingieri</Title>
			<SearchButton onPress={() => alert("abre pesquisa")}>
				<Feather name="search" size={36} color="red" />
			</SearchButton>
		</Container>
	);
};

export default Header;
