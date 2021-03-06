import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "./src/firebaseConnection";

import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
	Rajdhani_500Medium,
	Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import { theme } from "./src/global/styles/theme";

import BottomTab from "./src/Routes/BottomTab";

export default function App() {
	console.disableYellowBox = true;

	const [loading, setLoading] = useState(true);

	const [produtos, setProdutos] = useState([]);

	const [carShop, setCarShop] = useState([]);

	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Rajdhani_500Medium,
		Rajdhani_700Bold,
	});

	const LoadProdutos = async () => {
		await firebase
			.database()
			.ref("produtos")
			.once("value", (snapshot) => {
				setProdutos([]);

				snapshot.forEach((item, index) => {
					let data = {
						key: index,
						image: item.val().image,
						titulo: item.val().titulo,
						preco: item.val().preco,
						desc: item.val().desc,
						details: item.val().imgageDetails[0],
					};

					setProdutos((oldArray) => [...oldArray, data]);
				});
			});
		setLoading(false);
	};

	const LoadCarShop = async () => {
		await firebase
			.database()
			.ref("carrinho")
			.on("value", (snapshot) => {
				setCarShop([]);

				snapshot.forEach((item) => {
					let data = {
						key: item.key,
						image: item.val().image,
						titulo: item.val().titulo,
						preco: item.val().preco,
						size: item.val().size,
						quantidade: item.val().quantidade,
						valorTotal: item.val().valorTotal,
					};

					setCarShop((oldArray) => [...oldArray, data]);
				});
			});

	};
    

	useEffect(() => {
		LoadProdutos();

		LoadCarShop();
	}, []);

	

	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<StatusBar hidden={true}/>
			{loading ? (
				<ActivityIndicator color={`${theme.colors.primary}`} size={60} />
			) : (
				<NavigationContainer>
					<BottomTab dataProduto={produtos} dataCarrinho={carShop} loading={loading} />
				</NavigationContainer>
			)}
		</View>
	);
}
