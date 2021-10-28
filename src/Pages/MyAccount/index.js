import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "../Settings";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Cadastro from "../Cadastro";

const Stack = createNativeStackNavigator();

const MyAccount = ({logado, setLogado}) => {

	return (
		<Stack.Navigator>
			{logado ? (
				<Stack.Screen
					name="Settings"
					component={(props) => <Settings {...props} setLogado={setLogado} />}
					options={{
						headerShown: false,
					}}
				/>
			) : (
				<>
					<Stack.Screen
						name="SignIn"
						component={(props) => <SignIn {...props} setLogado={setLogado} />}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Cadastro"
						component={(props) => <Cadastro {...props} setLogado={setLogado} />}
						options={{
							headerShown: false,
						}}
					/>
				</>
			)}
		</Stack.Navigator>
	);
};

export default MyAccount;
