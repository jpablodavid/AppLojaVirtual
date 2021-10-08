import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import Header from "./src/components/Header/Header";
import DrawerRoute from "./src/Routes/DrawerRoute";
import BottomTab from "./src/components/BottomTab/BottomTab";

export default function App() {
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
