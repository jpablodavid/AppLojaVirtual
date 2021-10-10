import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Home";
import Lancamentos from "../Lancamentos";
import Sexy from "../Sexy";
import Outlet from "../Outlet";

const Stack = createNativeStackNavigator();

const Main = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Outlet"
				component={Outlet}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Lancamentos"
				component={Lancamentos}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Sexy"
				component={Sexy}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default Main;
