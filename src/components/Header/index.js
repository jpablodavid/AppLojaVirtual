import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Container, MenuButton, Title, SearchButton, Clean } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Image, View, Text, TextInput } from "react-native";

import { theme } from "../../global/styles/theme";

const Header = ({ back, titulo }) => {

	const [searchVisible, setSearchVisible] = useState(false);

	const navigation = useNavigation();

	return (
		<Container>
			{back ? (
				<View style={{width: '90%'}}>
					{searchVisible ? (
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<MenuButton onPress={() => setSearchVisible(false)}>
								<Feather name="arrow-left" size={24} color="#fbf7e4" />
							</MenuButton>
							<TextInput
								placeholder="Pesquisar"
								autoCorrect={false}
								onChangeText={() => {}}
								style={{
									backgroundColor: "rgba(100, 100, 100, 0.7)",
									width: "100%",
									fontSize: 16,
									borderRadius: 7,
									padding: 5,
									marginLeft: 20,
								}}
							/>
						</View>
					) : (
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<MenuButton onPress={() => navigation.goBack()}>
								<Feather name="arrow-left" size={24} color="#fbf7e4" />
							</MenuButton>
							<Title style={{ marginLeft: 10 }}>{titulo}</Title>
						</View>
					)}
				</View>
			) : (
				<View style={{ width: "90%" }}>
					{searchVisible ? (
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<MenuButton onPress={() => setSearchVisible(false)}>
								<Feather name="arrow-left" size={24} color="#fbf7e4" />
							</MenuButton>
							<TextInput
								placeholder="Pesquisar"
								autoCorrect={false}
								onChangeText={() => {}}
								style={{
									backgroundColor: "rgba(100, 100, 100, 0.7)",
									width: "100%",
									fontSize: 16,
									borderRadius: 7,
									padding: 5,
									marginLeft: 20,
								}}
							/>
						</View>
					) : (
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Image
								style={{ width: 50, height: 50 }}
								source={require("../../assets/logo1.png")}
							/>
							<Text
								style={{
									color: `${theme.colors.secondary}`,
									fontSize: 28,
									fontWeight: " bold",
									marginLeft: 20,
								}}
							>
								HARMONI
							</Text>
						</View>
					)}
				</View>
			)}

			<SearchButton onPress={() => setSearchVisible(!searchVisible)}>
				<Feather name="search" size={24} color="#fbf7e4" />
			</SearchButton>
		</Container>
	);
};

export default Header;
