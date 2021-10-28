import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
	Rajdhani_500Medium,
	Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import { theme } from "./src/global/styles/theme";

import api from "./src/services/api";

import BottomTab from "./src/Routes/BottomTab";

import axios from "axios";

export default function App({ navigation }) {
	
	const [loading, setLoading] = useState(true);


	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Rajdhani_500Medium,
		Rajdhani_700Bold,
	});


	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<StatusBar barStyle='light-content' backgroundColor= 'transparente' translucent={true}/>
			{(!fontsLoaded && loading) ? (
				<ActivityIndicator color={`${theme.colors.primary}`} size={60} />
			):(
				<NavigationContainer>
					<BottomTab />
				</NavigationContainer>
			)}
			
		</View>
	);
}
