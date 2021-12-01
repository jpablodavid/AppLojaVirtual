import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Container, ViewHeader, ViewSearch, InputSearch, MenuButton, Title, SearchButton, Logo, Marca } from "./styles";
import { useNavigation } from "@react-navigation/native";


const Header = ({ back, titulo }) => {

	const [searchVisible, setSearchVisible] = useState(false);

	const navigation = useNavigation();

	return (
		<Container>
			{back ? (
				<ViewHeader>
					{searchVisible ? (
						<ViewSearch>
							<MenuButton onPress={() => setSearchVisible(false)}>
								<Feather name="arrow-left" size={24} color="#fbf7e4" />
							</MenuButton>
							<InputSearch
								placeholder="Pesquisar"
								autoCorrect={false}
								onChangeText={() => {}}
							/>
						</ViewSearch>
					) : (
						<ViewSearch>
							<MenuButton onPress={() => navigation.goBack()}>
								<Feather name="arrow-left" size={24} color="#fbf7e4" />
							</MenuButton>
							<Title>{titulo}</Title>
						</ViewSearch>
					)}
				</ViewHeader>
			) : (
				<ViewHeader>
					{searchVisible ? (
						<ViewSearch>
							<MenuButton onPress={() => setSearchVisible(false)}>
								<Feather name="arrow-left" size={24} color="#fbf7e4" />
							</MenuButton>
							<InputSearch
								placeholder="Pesquisar"
								autoCorrect={false}
								onChangeText={() => {}}
							/>
						</ViewSearch>
					) : (
						<ViewSearch>
							<Logo
								source={require("../../assets/Headerlogo.png")}
							/>
							<Marca>
								HARMONI
							</Marca>
						</ViewSearch>
					)}
				</ViewHeader>
			)}

			<SearchButton onPress={() => setSearchVisible(!searchVisible)}>
				<Feather name="search" size={24} color="#fbf7e4" />
			</SearchButton>
		</Container>
	);
};

export default Header;
