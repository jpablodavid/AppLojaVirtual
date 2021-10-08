import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Details = () => {

	const [size, setSize] = useState('Selecionar Tamanho');

	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<View >
					<Image
						source={require("../../assets/item3.png")}
						style={{ width: "100%", height: 400 }}
					/>
				</View>
				<View
					style={{
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: "#555",
					}}
				>
					<Text>Nome do produto</Text>
					<Text>Color</Text>
					<Text>R$ 150,00</Text>
				</View>
				<View
					style={{
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: "#555",
					}}
				>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Text>Tamanho</Text>
						<Text>{size}</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: "#555",
					}}
				>
					<Text>
						Descriçao: {`\n`}
						CaLcinha na cor preta. Modelo em Algodão Detalhe bordado Código Do
						Produto: 0374699506
					</Text>
				</View>
			</ScrollView>

			<View style={{ height: 70, backgroundColor: "#fff" ,alignItems: 'center', justifyContent:'center'}}>
				<TouchableOpacity style={{backgroundColor: '#000', width: "80%", height: 45, borderRadius: 7, alignItems:'center' , justifyContent: 'center'}}>
					<Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Adicionar ao carrinho</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Details;