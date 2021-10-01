import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Home from "../Pages/Home";
//import Details from "../Pages/Details";

const Stack = createNativeStackNavigator();

const StackRoute = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="Details"
				component={Details}
			/>
		</Stack.Navigator>
	);
};

export default StackRoute;
