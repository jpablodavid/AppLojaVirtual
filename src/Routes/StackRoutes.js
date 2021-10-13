import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import Lancamentos from "../Pages/Lancamentos";
import Sexy from "../Pages/Sexy";
import Outlet from "../Pages/Outlet";
import Details from "../components/Details";
import DrawerRoutes from "./DrawerRoutes";

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
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name="DrawerRoutes"
				component={DrawerRoutes}
				options={{
					headerShown: true,
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackRoutes;
