import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import Header from "./src/components/Header/Header";
import DrawerRoute from "./src/Routes/DrawerRoute";
import BottomTab from "./src/components/BottomTab/BottomTab";

export default function App() {

	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Rajdhani_500Medium,
		Rajdhani_700Bold,
	});

	if(!fontsLoaded){
		return <AppLoading/>
	}

	return (
		<>
			<StatusBar style="light" backgroundColor="transparent" translucent />

			<NavigationContainer>
				<Header back={true} />

				<BottomTab />
			</NavigationContainer>
		</>
	);
}
