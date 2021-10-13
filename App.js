import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
	Rajdhani_500Medium,
	Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";


import api from "./src/services/api";
import Header from "./src/components/Header";
import BottomTab from "./src/Routes/BottomTab";

import MyDrawer from './src/Routes/DrawerRoutes';

export default function App() {
	const [produtos, setProdutos] = useState([]);
	const [loading, setLoading] = useState(true);
 
	useEffect(() => {
		const loadProdutos = async () => {
			const response = await api.get("r-api/?api=filmes");
			console.log(response.data);
			setProdutos(response.data);
			setLoading(false);
		}

		loadProdutos();
	}, []);

	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Rajdhani_500Medium,
		Rajdhani_700Bold,
	});

	if (!fontsLoaded && loading) {
		return <View style={{flex: 1, justifyContent: 'center'}}>
			<ActivityIndicator color='red' size={60}/>
			<AppLoading />
		</View>;
	} else {
		return (
			<>
				<StatusBar style="light" backgroundColor="transparent" translucent />

				<NavigationContainer>

					<MyDrawer />

					<BottomTab/>
				</NavigationContainer>
			</>
		);
	}
}
