import React, { useState } from "react";
import {
	Image,
	ScrollView,
	Text,
	View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import firebase from '../../firebaseConnection';

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";
import Carousel from "../../components/Carousel";

const Details = ({ route }) => {

	const { img, titulo, preco, desc } = route.params;

	const navigation = useNavigation();

	const [size, setSize] = useState("Selecionar Tamanho");

	const carShopAdd = async (img, titulo, preco, desc, size) => {
		let carrinho = await firebase.database().ref("carrinho");
		let chave = carrinho.push().key;

		carrinho.child(chave).set({
			imagem: img,
			titulo: titulo,
			preco: preco,
			tamanho: size,
			descricao: desc,
		});
		navigation.navigate("MyBag");
	};

	const images = [
		"https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128",
		"https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993",
		"https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015",
		"https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369",
		"https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445",
	];

	return (
		<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
			<Header back={true} titulo={"Detalhes"} />
				<View>
					<Carousel images={images}/>
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
						flexDirection: "row",
						justifyContent: "space-between",
						padding: 10,
						borderBottomWidth: 1,
						borderBottomColor: `${theme.colors.primary}`,
					}}
				>
					<Text>Tamanho</Text>
					<Picker
						style={{
							border: "none",
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
					<Text>Descriçao:</Text>
					<Text>{desc}</Text>
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
					onPress={() => carShopAdd(img, titulo, preco, desc, size)}
				/>
			</View>
		</View>
	);
};

export default Details;
