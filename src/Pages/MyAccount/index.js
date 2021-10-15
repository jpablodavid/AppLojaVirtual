import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Settings from '../Settings';
import SignIn from '../SignIn';
import SignUp from "../SignUp";

const Stack = createNativeStackNavigator();

const MyAccount = (nome) => {
    return (
			<Stack.Navigator initialRouteName="SignIn">
				{logado ? (
					<Stack.Screen
						name='Settings'
						component={Settings}
						options={{
							headerShown: false,
                            label: `${nome}`
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
			</Stack.Navigator>
		);
}

export default MyAccount;