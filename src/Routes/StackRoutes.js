import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import Lancamentos from "../Pages/Lancamentos";
import Outlet from "../Pages/Outlet";
import Details from "../Pages/Details";
import EnvioPagamento from "../Pages/EnvioPagamento";

const Stack = createNativeStackNavigator();

const StackRoutes = ({ data , usuario}) => {

	const dataHome = data.slice(0, 15);
	const dataLancamentos = data.slice(16, 35);
	const dataOutlet = data.slice(36);

	
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={(props) => <Home {...props} dataHome={dataHome} />}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Outlet"
				component={(props) => <Outlet {...props} dataOutlet={dataOutlet} />}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Lancamentos"
				component={(props) => (
					<Lancamentos {...props} dataLancamentos={dataLancamentos} />
				)}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Details"
				component={Details}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="EnvioPagamento"
				component={(props) => (
					<EnvioPagamento {...props} usuario={usuario} />
				)}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackRoutes;
