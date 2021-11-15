import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";
import Carousel from "../../components/Carousel";

const Details = ({ route }) => {
	const { image, titulo, preco, descricao, details , quantidade} = route.params;

	const navigation = useNavigation();

	const [size, setSize] = useState("Selecionar Tamanho");

	const carShopAdd = async (image, titulo, preco, size, quantidade) => {
		quantidade = 1;
		let carrinho = await firebase.database().ref("carrinho");
		let chave = carrinho.push().key;

		carrinho.child(chave).set({
			image: image,
			titulo: titulo,
			preco: preco,
			size: size,
			quantidade: quantidade,
			valorTotal: preco * quantidade,
		});
		navigation.navigate("MyBag");
	};

	const images = [];

  	// details.ProductImages.forEach((item) => {
	// 	images.push(item);
	// });
	details.forEach((item) => {
	 	images.push(item);
	});

	//acertando a descrição
	// let descri = descricao.split("A");
	// let desc = descri[1].split('.');
    let desc = descricao;

	return (
		<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
			<Header back={true} titulo={"Detalhes"} />
			<View>
				<Carousel images={images} />
			</View>
			<ScrollView showsHorizontalScrollIndicator={false}>
				<View
					style={{
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: `${theme.colors.primary}`,
					}}
				>
					<Text style={{ color: `${theme.colors.primary}` }}>{titulo}</Text>
					<Text style={{ fontWeight: "bold" }}>R$ {preco.toFixed(2)}</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: `${theme.colors.primary}`,
					}}
				>
					<Text style={{ color: `${theme.colors.primary}` }}>Tamanho</Text>
					<Picker
						style={{
							border: "none",
							borderColor: `${theme.colors.primary}`,
							backgroundColor: `${theme.colors.tertiary}`,
						}}
						selectedValue={size}
						onValueChange={(itemValue, itemIndex) => setSize(itemValue)}
					>
						<Picker.Item label="P" value="Pequeno" />
						<Picker.Item label="M" value="Medio" />
						<Picker.Item label="G" value="Grande" />
					</Picker>
				</View>

				<View
					style={{
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: "#555",
					}}
				>
					<Text style={{ color: `${theme.colors.primary}` }}>Descriçao:</Text>
					<Text>{desc[0]}</Text>
				</View>
				<View
					style={{
						justifyContent: "center",
						paddingVertical: 18,
						paddingHorizontal: 40,
					}}
				>
					<ButtonMain
						height={40}
						width="100%"
						backgroundColor={`${theme.colors.secondary}`}
						text="Adicionar ao Carinho"
						textColor={`${theme.colors.primary}`}
						borderWidth={1}
						onPress={() => carShopAdd(image, titulo, preco, size, quantidade)}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default Details;
