import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import {
	CarShopView,
	Container,
	ContainerCarShop,
	ContainerVazio,
	Loading,
	TextDate,
	Texts,
	TextPadrao,
	TextVazio,
	ViewValores,
	ContainerBottom,
	ViewInfo,
	ViewButton,
	ItemValor,
	TextValor,
} from "./styles";
import Icon from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/core";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";
import ItemCarrinho from "../../components/ItemCarrinho";

const ShoppingCar = ({ data, loading }) => {
	const navigation = useNavigation();

	const [frete, setFrete] = useState(0);

	const [carrinho, setCarrinho] = useState(data.length);

	const SubTotal = data.reduce(
		(accumulator, item) => (accumulator += item.valorTotal),
		0
	);

	const TotalValor = (frete + SubTotal).toFixed(2);

	const carShopDelete = async (key) => {
		await firebase.database().ref("carrinho").child(key).remove();
	};

	return (
		<Container>
			<Header back={true} titulo={"Carrinho"} />
			{carrinho > 0 ? (
				<ContainerCarShop>
					<ViewInfo>
						<Texts>Harmoni: Roupas Femininas</Texts>
						<Texts>
							Entrega:
							<TextDate>seg 1 nov - ter 2 nov</TextDate>
						</Texts>
					</ViewInfo>
					<CarShopView
						horizontal={false}
						showsHorizontalScrollIndicator={false}
						data={data}
						keyExtractor={(item) => item.key}
						renderItem={({ item }) => (
							<ItemCarrinho
								data={item}
								key={item.key}
								deleteItem={() => carShopDelete(item.key)}
								quant={item.quantidade}
							/>
						)}
					/>
					<ContainerBottom>
						<ViewValores>
							<ItemValor>
								<TextPadrao>Sub-Total</TextPadrao>
								<TextPadrao>R$ {SubTotal.toFixed(2)}</TextPadrao>
							</ItemValor>
							<ItemValor>
								<TextPadrao>Frete</TextPadrao>
								<TextPadrao>R$ {frete.toFixed(2)}</TextPadrao>
							</ItemValor>
							<ItemValor>
								<TextValor>Total: </TextValor>
								<TextValor>R$ {TotalValor}</TextValor>
							</ItemValor>
						</ViewValores>
						<ViewButton>
							<ButtonMain
								height={40}
								width={300}
								backgroundColor={`${theme.colors.primary}`}
								text={`Comprar / R$ ${TotalValor}`}
								textColor={`${theme.colors.tertiary}`}
								borderWidth={1}
								onPress={() =>
									navigation.navigate("EnvioPagamento", {
										data,
										SubTotal,
										frete,
										TotalValor,
									})
								}
							/>
						</ViewButton>
					</ContainerBottom>
				</ContainerCarShop>
			) : ( loading ? (
				<Loading>
					<ActivityIndicator color={`${theme.colors.primary}`} size={60} />
				</Loading>
			) : (
				<ContainerVazio>
					<Icon
						name={"cart-arrow-down"}
						size={50}
						color={`${theme.colors.secondary}`}
					/>
					<TextVazio>Seu Carrinho de Compras está Vazio</TextVazio>
				</ContainerVazio>
			)
			)}
		</Container>
	);
};

export default ShoppingCar;
