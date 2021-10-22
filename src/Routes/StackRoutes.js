import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import Lancamentos from "../Pages/Lancamentos";
import Sexy from "../Pages/Sexy";
import Outlet from "../Pages/Outlet";
import Details from "../Pages/Details";
import Envio_Pagamento from "../Pages/Envio&Pagamento";
import MyAccount from "../Pages/MyAccount";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {

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
