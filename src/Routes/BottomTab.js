import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome5";
import { Linking } from "react-native";

import { theme } from "../global/styles/theme";

import MyAccount from "../Pages/MyAccount";
import ShoppingCar from "../Pages/ShoppingCar";
import StackRoutes from "./StackRoutes";


const Tab = createMaterialBottomTabNavigator();

const BottomTab = ({data}) => {
	const [logado, setLogado] = useState(false);

	let nome = "Pablo";

	return (
		<Tab.Navigator
			none={false}
			initialRouteName="StackRoutes"
			labeled={true}
			shifting={false}
			sceneAnimationEnabled={true}
			activeColor={theme.colors.secondary}
			inactiveColor={theme.colors.tertiary}
			barStyle={{
				borderTopColor: "red",
				backgroundColor: `${theme.colors.primary}`,
			}}
		>
			<Tab.Screen
				name="StacKRoutes"
				component={(props) => (
					<StackRoutes {...props} data={data} />
				)}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ focused, color }) => (
						<Icon name={focused ? "home" : "home"} size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="MyAccount"
				component={(props) => (
					<MyAccount {...props} logado={logado} setLogado={setLogado} />
				)}
				options={{
					tabBarLabel: logado ? `${nome}` : "Minha Conta",
					tabBarIcon: ({ focused, color }) =>
						logado ? (
							<Icon name={focused ? "user" : "user"} size={24} color={color} />
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
				name="Seguir"
				component={() =>
					Linking.canOpenURL("http://instagram.com/jpablodavid/")
						.then((supported) =>
							Linking.openURL(
								supported
									? "http://instagram.com/jpablodavid/"
									: "https://www.instagram.com/jpablodavid/"
							)
						)
						.catch((err) => console.error("An error occurred", err))
				}
				options={{
					tabBarLabel: "Siga-Nos",
					tabBarIcon: ({ focused, color }) => (
						<Icon
							name={focused ? "instagram" : "instagram"}
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
