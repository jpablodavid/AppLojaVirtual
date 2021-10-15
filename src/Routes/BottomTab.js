
import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome5";

import { theme } from "../global/styles/theme";

import MyAccount from "../Pages/MyAccount";
import ShoppingCar from "../Pages/ShoppingCar";

import StackRoutes from "./StackRoutes";
import { Image } from "react-native";
import UserTab from "../components/UserTab";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {

	const [logado, setLogado] = useState(true);

	return (
		<Tab.Navigator
			none={false}
			initialRouteName="StackRoutes"
			labeled={true}
			shifting={true}
			sceneAnimationEnabled={true}
			activeColor={theme.colors.secondary}
			inactiveColor={theme.colors.tertiary}
			barStyle={{
				borderTopColor: "red",
				backgroundColor: `${theme.colors.primary}`,
			}}
		>
			<Tab.Screen
				name="StackRoutes"
				component={StackRoutes}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ focused, color }) => (
						<Icon name={focused ? "home" : "home"} size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="MyAccount"
				component={MyAccount}
				options={{
					tabBarLabel: logado ? "" : "Conta",
					tabBarIcon: ({ focused, color }) =>
						logado ? (
							<Icon
								name={focused ? "user" : "user"}
								size={24}
								color={color}
							/>
						) : (
							<Icon
								name={focused ? "user-circle" : "user-circle"}
								size={24}
								color={color}
							/>
						),
				}}
			/>

			<Tab.Screen
				name="MyBag"
				component={ShoppingCar}
				options={{
					tabBarLabel: "Carrinho",
					tabBarIcon: ({ focused, color }) => (
						<Icon
							name={focused ? "shopping-bag" : "shopping-bag"}
							size={24}
							color={color}
						/>
					),
					tabBarBadge: 2,
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTab;
