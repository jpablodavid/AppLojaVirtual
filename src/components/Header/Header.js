import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, MenuButton, Title, SearchButton } from "./styles";


const Header = ({ back }) => {

	return (
		<Container>
			{back ? (
				<MenuButton onPress={() => alert("back")}>
					<Feather name="arrow-left" size={24} color="#aaa" />
				</MenuButton>
			) : (
				<MenuButton onPress={() => alert("abre menu produtos")}>
					<Feather name="menu" size={24} color="#aaa" />
				</MenuButton>
			)}

			<Title>Lingieri</Title>
			<SearchButton onPress={() => alert("abre pesquisa")}>
				<Feather name="search" size={24} color="#aaa" />
			</SearchButton>
		</Container>
	);
};

export default Header;
