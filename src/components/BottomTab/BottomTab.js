import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

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
			activeColor="black"
			inactiveColor="white"
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarColor: "#333",
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
					tabBarColor: "red",
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
					tabBarColor: "gray",
					tabBarIcon: ({ focused, color }) => (
						<FontAwesome5
							name={focused ? "shopping-bag" : "shopping-bag"}
							size={24}
							color={color}
						/>
					),
					tabBarBadge:3,
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomTab;
