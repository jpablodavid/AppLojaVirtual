import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ShoppingCar = () => {
	return (
		<View style={{ flex: 1, padding: 10 }}>
			<Text>Lingirie: lançamentos</Text>
			<Text style={{ marginBottom: 10 }}>
				Entrega{" "}
				<Text style={{ fontWeight: "bold" }}>seg 1 nov - ter 2 nov</Text>
			</Text>
			<View
				style={{ flexDirection: "row", padding: 10, backgroundColor: "#eee" }}
			>
				<Image
					style={{ width: 150, height: 150 }}
					source={require("../../assets/item3.png")}
				/>
				<View style={{ marginLeft: 10, justifyContent: "space-between" }}>
					<Text>Calcinha branca</Text>
					<Text>P</Text>
					<View style={{ flexDirection: "row" }}>
						<TouchableOpacity>
							<FontAwesome5 name="minus-circle" size={24} color={"#000"} />
						</TouchableOpacity>
						<Text style={{ marginLeft: 5, marginRight: 5, fontSize: 20 }}>
							1
						</Text>
						<TouchableOpacity>
							<FontAwesome5 name="plus-circle" size={24} color={"#000"} />
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity style={{ position: "absolute", right: 10, top: 10 }}>
					<Text>X</Text>
				</TouchableOpacity>
				<Text style={{ position: "absolute", right: 10, bottom: 10 }}>
					R$ 250,00
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					backgroundColor: "#ddd",
					marginTop: 10,
					justifyContent: "flex-end",
					padding: 10
				}}
			>
				<Text>Numero de items</Text>
				<Text>Frete R$ 0,00</Text>
				<Text>Total: R$ 250,00</Text>
				<TouchableOpacity
					style={{
						backgroundColor: "blue",
						width: "95%",
						height: 45,
						alignItems: "center",
						justifyContent: "center",
						margin: 10,
					}}
				>
					<Text>Finalizar compra</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						backgroundColor: "green",
						width: "95%",
						height: 45,
						alignItems: "center",
						justifyContent: "center",
						margin: 10,
					}}
				>
					<Text>Continuar Comprando</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ShoppingCar;
