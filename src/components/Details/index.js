import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";

import Header from '../Header'

const Details = ({route}) => {

	const {img, titulo, preco, desc} = route.params;
	
	const navigation = useNavigation();

	const [size, setSize] = useState('Selecionar Tamanho');

	return (
		<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
			<Header back={true} />
			<ScrollView style={{ flex: 1 }}>
				<View>
					<Image source={img} style={{ width: "100%", height: 400 }} />
				</View>
				<View
					style={{
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: `${theme.colors.primary}`,
					}}
				>
					<Text>{titulo}</Text>
					<Text>Color</Text>
					<Text>{preco}</Text>
				</View>
				<View
					style={{
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: `${theme.colors.primary}`,
					}}
				>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text>Tamanho</Text>
						<Text>p</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: "#555",
					}}
				>
					<Text>Descriçao:</Text>
					<Text>{desc}</Text>
				</View>
			</ScrollView>

			<View
				style={{
					height: 70,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<TouchableOpacity
					style={{
						backgroundColor: `${theme.colors.secondary}`,
						width: "80%",
						height: 45,
						borderRadius: 7,
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("MyBag")}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "bold",
							color: `${theme.colors.primary}`,
						}}
					>
						Adicionar ao carrinho
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Details;