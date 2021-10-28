import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/core";
import firebase from "../../firebaseConnection";

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";
import ItemCarrinho from "../../components/ItemCarrinho";

const ShoppingCar = () => {
	const navigation = useNavigation();

	const [carShop, setCarShop] = useState([]);

	const [valorCompra, setValorCompra] = useState([0]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const LoadCarShop = async () => {
			await firebase
				.database()
				.ref("carrinho")
				.on("value", (snapshot) => {
					setCarShop([]);

					snapshot.forEach((item) => {
						let data = {
							key: item.key,
							img: item.val().imagem.uri,
							titulo: item.val().titulo,
							preco: item.val().preco,
							size: item.val().tamanho,
							desc: item.val().descricao,
						};

						setCarShop((oldArray) => [...oldArray, data]);
					});
				});
			setLoading(false);
		};

		LoadCarShop();
	}, []);
 
	var ValorDeTodosItems = [];
	var valorTotal = 0;

	const calculaTotal = (valor) => {
		ValorDeTodosItems.push(valor);
		ValorDeTodosItems.forEach(item => valorTotal += item)
		setValorCompra(valorTotal);
	};

	const carShopDelete = async (key) => {
		await firebase.database().ref("carrinho").child(key).remove();
	};

	if (loading) {
		return (
			<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
				<Header back={true} titulo={"Carrinho"} />
				<View style={{ flex: 1, justifyContent: "center" }}>
					<ActivityIndicator color={`${theme.colors.primary}`} size={60} />
				</View>
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
				<Header back={true} titulo={"Carrinho"} />

				{carShop.length > 0 ? (
					<View style={{ flex: 1, padding: 10 }}>
						<View style={{ marginBottom: 10 }}>
							<Text style={{ color: `${theme.colors.primary}` }}>
								Lingirie: lançamentos
							</Text>
							<Text style={{ color: `${theme.colors.primary}` }}>
								Entrega
								<Text style={{ fontWeight: "bold", marginLeft: 3 }}>
									seg 1 nov - ter 2 nov
								</Text>
							</Text>
						</View>
						<FlatList
							style={{ flex: 1 }}
							horizontal={false}
							showsHorizontalScrollIndicator={false}
							data={carShop}
							keyExtractor={(item) => item.key}
							renderItem={({ item }) => (
								<ItemCarrinho
									data={item}
									deleteItem={() => carShopDelete(item.key)}
									calculaTotal={calculaTotal}
								/>
							)}
						/>
						<View
							style={{
								flex: 0.6,
								padding: 20,
								justifyContent: "space-between",
							}}
						>
							<View>
								<Text>Numero de items: </Text>
								<Text>Total: R$ {valorCompra}</Text>
							</View>
							<View>
								<ButtonMain
									height={40}
									width="100%"
									backgroundColor={`${theme.colors.secondary}`}
									text="Finalizar compra"
									textColor={`${theme.colors.primary}`}
									borderWidth={1}
									onPress={() => navigation.navigate("Envio_Pagamento")}
								/>

								<ButtonMain
									height={40}
									width="100%"
									backgroundColor={`${theme.colors.primary}`}
									text="Continuar Comprando"
									textColor={`${theme.colors.secondary}`}
									borderWidth={1}
									onPress={() => navigation.goBack()}
								/>
							</View>
						</View>
					</View>
				) : (
					<View
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Icon
							name={"cart-arrow-down"}
							size={50}
							color={`${theme.colors.secondary}`}
						/>
						<Text
							style={{
								marginTop: 20,
								fontSize: 22,
								fontWeight: "bold",
								color: `${theme.colors.primary}`,
							}}
						>
							Seu Carrinho de Compras está Vazio
						</Text>
					</View>
				)}
			</View>
		);
	}
};

export default ShoppingCar;
