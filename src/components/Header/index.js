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
				<View style={{flexDirection:'row', alignItems: 'center'}}>
					<MenuButton onPress={() => navigation.goBack()}>
						<Feather name="arrow-left" size={24} color="#fbf7e4" />
					</MenuButton>
					<Title style={{marginLeft: 10}}>{titulo}</Title>
				</View>
			) : (
				<View style={{flexDirection: 'row'}}>
					<Image style={{width: 50, height: 50 }}source={require('../../assets/logo1.png')}/>
					<Text
						style={{
							color: `${theme.colors.secondary}`,
							fontSize: 28,
							fontWeight: " bold",
						}}
					>
						HARMONI
					</Text>
				</View>
			)}
			{searchVisible ? (
				<TextInput
					placeholder="Pesquisar"
					autoCorrect={false}
					onChangeText={() => {}}
					style={{
						backgroundColor: "rgba(100, 100, 100, 0.7)",
						width: "50%",
						fontSize: 16,
						borderRadius: 7,
						padding: 5,
					}}
				/>
			) : (
				<Clean />
			)}

			<SearchButton
				onPress={() => setSearchVisible(!searchVisible)}
			>
				<Feather name="search" size={24} color="#fbf7e4" />
			</SearchButton>
		</Container>
	);
};

export default Header;
