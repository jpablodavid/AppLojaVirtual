import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";
import ItemCarrinho from "../../components/ItemCarrinho";

const ShoppingCar = ({ route }) => {
	const navigation = useNavigation();

	const { img, titulo, preco, desc } = route.params;

	const item = true;

	return (
		<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
			<Header back={true} titulo={"Carrinho"} />
			{item ? (
				<View>
					<Text>Vazio</Text>
				</View>
			) : (
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
						data={[1, 2, 3, 4]}
						renderItem={({ item }) => (
							<ItemCarrinho
								img={img}
								titulo={titulo}
								preco={preco}
								desc={desc}
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
							<Text>Numero de items</Text>
							<Text>Frete R$ 0,00</Text>
							<Text>Total: R$ 250,00</Text>
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
			)}
		</View>
	);
};

export default ShoppingCar;
