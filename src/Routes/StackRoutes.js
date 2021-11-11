import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import Lancamentos from "../Pages/Lancamentos";
import Outlet from "../Pages/Outlet";
import Details from "../Pages/Details";
import Envio_Pagamento from "../Pages/Envio&Pagamento";

const Stack = createNativeStackNavigator();

const StackRoutes = ({ data }) => {
	// const dataHome = data.slice(0, 15);
	// const dataLancamentos = data.slice(16, 35);
	// const dataOutlet = data.slice(36);

	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={(props) => <Home {...props} dataHome={data} />}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Outlet"
				component={(props) => <Outlet {...props} dataOutlet={data} />}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Lancamentos"
				component={(props) => (
					<Lancamentos {...props} dataLancamentos={data} />
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
				name="Envio_Pagamento"
				component={Envio_Pagamento}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackRoutes;
