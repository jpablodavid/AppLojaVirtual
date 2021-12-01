import React, { useState } from "react";
import {
	Container,
	ContainerInfo,
	ViewItem,
	Title,
	TextBold,
	ViewSize,
	ViewButton,
} from "./styles";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";
import Carousel from "../../components/Carousel";

const Details = ({ route }) => {
	const { image, titulo, preco, descricao, details } = route.params;

	const navigation = useNavigation();

	const [size, setSize] = useState("P");

	const carShopAdd = async (image, titulo, preco, size) => {
		let quantidade = 1;
		let valorTotal = preco * quantidade;
		let carrinho = await firebase.database().ref("carrinho");
		let chave = carrinho.push().key;

		carrinho.child(chave).set({
			image: image,
			titulo: titulo,
			preco: preco,
			size: size,
			quantidade: quantidade,
			valorTotal: valorTotal,
		});
		navigation.navigate("MyBag");
	};

	const images = [];

	details.ProductImages.forEach((item) => {
		images.push(item);
	});
	// details.forEach((item) => {
	// 	images.push(item);
	// });

	//acertando a descrição
	let descri = descricao.split("A");
	let desc = descri[1].split('.');
	

	return (
		<Container>
			<Header back={true} titulo={"Detalhes"} />

			<Carousel images={images} />

			<ContainerInfo showsHorizontalScrollIndicator={false}>
				<ViewItem>
					<Title>{titulo}</Title>
					<TextBold>R$ {preco.toFixed(2)}</TextBold>
				</ViewItem>
				<ViewSize>
					<Title>Tamanho:</Title>
					<Picker
						style={{
							width: 80,
							postion: "absolute",
							padding: 10,
							borderWidth: 1,
							borderColor: "#000",
						}}
						mode="dropdown"
						itemStyle={{
							fontWeight: "900",
							fontSize: 18,
							padding: 30,
						}}
						selectedValue={size}
						value={size}
						onValueChange={(itemValue) => setSize(itemValue)}
					>
						<Picker.Item label="P" value="P" />
						<Picker.Item label="M" value="M" />
						<Picker.Item label="G" value="G" />
					</Picker>
				</ViewSize>

				<ViewItem>
					<Title>Descriçao:</Title>
					<TextBold>{desc[0]}</TextBold>
				</ViewItem>
			</ContainerInfo>
			<ViewButton>
				<ButtonMain
					height={40}
					width="100%"
					backgroundColor={`${theme.colors.secondary}`}
					text="Adicionar ao Carinho"
					textColor={`${theme.colors.primary}`}
					borderWidth={1}
					onPress={() => carShopAdd(image, titulo, preco, size)}
				/>
			</ViewButton>
		</Container>
	);
};

export default Details;
