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
	const { image, titulo, preco, descricao, details, quantidade } = route.params;

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
							border: "none",
							borderColor: `${theme.colors.primary}`,
							backgroundColor: `${theme.colors.tertiary}`,
						}}
						selectedValue={size}
						onValueChange={(itemValue, itemIndex) => setSize(itemValue)}
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
					onPress={() => carShopAdd(image, titulo, preco, size, quantidade)}
				/>
			</ViewButton>
		</Container>
	);
};

export default Details;
