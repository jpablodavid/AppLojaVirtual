import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "../Settings";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Cadastro from "../Cadastro";

const Stack = createNativeStackNavigator();

const MyAccount = () => {

	const [logado, setLogado] = useState(false);

	return (
		<Stack.Navigator>
			{logado ? (
				<Stack.Screen
					name="Settings"
					component={Settings}
					options={{
						headerShown: false,
					}}
				/>
			) : (
				<Stack.Screen
					name="SignIn"
					component={SignIn}
					options={{
						headerShown: false,
					}}
				/>
			)}

			<Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Cadastro"
				component={Cadastro}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default MyAccount;
