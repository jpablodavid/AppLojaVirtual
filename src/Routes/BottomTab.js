import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome5";
import { Linking } from "react-native";

import { theme } from "../global/styles/theme";

import MyAccount from "../Pages/MyAccount";
import ShoppingCar from "../Pages/ShoppingCar";
import StackRoutes from "./StackRoutes";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = ({ dataProduto, dataCarrinho , loading}) => {

	const [logado, setLogado] = useState(false);

	const [usuario, setUsuario] = useState({});

	let numeroDeItens = dataCarrinho.length;

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
				fontFamily: `${theme.fonts.text500}`,
			}}
		>
			<Tab.Screen
				name="StackRoutes"
				component={(props) => (
					<StackRoutes {...props} data={dataProduto} usuario={usuario} />
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
					<MyAccount
						{...props}
						logado={logado}
						setLogado={setLogado}
						setUsuario={setUsuario}
						usuario={usuario}
					/>
				)}
				options={{
					tabBarLabel: logado ? `${usuario.nome}` : "Minha Conta",
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
					Linking.canOpenURL("http://github.com/")
						.then((supported) =>
							Linking.openURL(
								supported
									? "https://github.com/jpablodavid"
									: "https://github.com/jpablodavid"
							)
						)
						.catch((erro) => console.error("An error occurred", erro))
				}
				options={{
					tabBarLabel: "Siga-Nos",
					tabBarIcon: ({ focused, color }) => (
						<Icon
							name={focused ? "github" : "github"}
							size={24}
							color={color}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="MyBag"
				component={(props) => (
					<ShoppingCar
						{...props}
						data={dataCarrinho}
						loading={loading}
						logado={logado}
					/>
				)}
				options={{
					tabBarLabel: "Carrinho",
					tabBarIcon: ({ focused, color }) => (
						<Icon
							name={focused ? "shopping-bag" : "shopping-bag"}
							size={24}
							color={color}
						/>
					),
					tabBarBadge: numeroDeItens === 0 ? false : numeroDeItens,
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTab;
