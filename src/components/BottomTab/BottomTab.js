import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import { theme } from '../../global/styles/theme';

import Home from '../../Pages/Home';
import MyAccount from '../../Pages/MyAccount';
import ShoppingCar from '../../Pages/ShoppingCar';



const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
	return (
		<Tab.Navigator
			labeled={true}
			shifting={true}
			sceneAnimationEnabled={true}
			activeColor={theme.colors.secondary}
			inactiveColor={theme.colors.tertiary}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarColor: `${theme.colors.primary}`,
					tabBarIcon: ({ focused, color }) => (
						<FontAwesome5
							name={focused ? "home" : "home"}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="My Account"
				component={MyAccount}
				options={{
					tabBarColor: `${theme.colors.primary}`,
					tabBarIcon: ({ focused, color }) => (
						<FontAwesome5
							name={focused ? "user-circle" : "user-circle"}
							size={24}
							color={color}
						/>
					),
				}}
			/>

			<Tab.Screen
				name="My Bag"
				component={ShoppingCar}
				options={{
					tabBarColor: `${theme.colors.primary}`,
					tabBarIcon: ({ focused, color }) => (
						<FontAwesome5
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
}

export default BottomTab;
