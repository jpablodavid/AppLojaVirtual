import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/core";

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import Envio_Pagamento from "../Envio&Pagamento";
import ButtonMain from "../../components/ButtonMain";

const ShoppingCar = () => {
	const navigation = useNavigation();

	const [size, setSize] = useState("");

	return (
		<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
			<Header back={true} />
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
					data={[1, 2, 3, 4, 5]}
					renderItem={({ item }) => (
						<View
							style={{
								flexDirection: "row",
								marginBottom: 10,
								marginRight: 10,
								padding: 10,
								backgroundColor: `${theme.colors.secondary}`,
								position: "relative",
							}}
						>
							<Image
								style={{ width: 150, height: 150 }}
								source={require("../../assets/item3.png")}
							/>
							<View style={{ marginLeft: 10, justifyContent: "space-between" }}>
								<Text>Calcinha branca</Text>
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
								<View style={{ flexDirection: "row" }}>
									<TouchableOpacity>
										<FontAwesome5
											name="minus-circle"
											size={24}
											color={"#000"}
										/>
									</TouchableOpacity>
									<Text style={{ marginLeft: 5, marginRight: 5, fontSize: 20 }}>
										1
									</Text>
									<TouchableOpacity>
										<FontAwesome5 name="plus-circle" size={24} color={"#000"} />
									</TouchableOpacity>
								</View>
							</View>
							<TouchableOpacity
								style={{ position: "absolute", right: 10, top: 10 }}
							>
								<Text>X</Text>
							</TouchableOpacity>
							<Text style={{ position: "absolute", right: 10, bottom: 10 }}>
								R$ 250,00
							</Text>
						</View>
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
							onPress={() => navigation.navigate(Envio_Pagamento)}
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
		</View>
	);
};

export default ShoppingCar;
