import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StackRoute from "./StackRoute";
import Produtos from "../components/Produtos/Produtos";

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
	return (
		<Drawer.Navigator 
			screenOptions={{
				headerShow: false,
				drawerStyle:{
					backgroundColor: '#090A0E',
					paddingTop: 20,
				},
				drawerActiveBackgroundColor: '#e72f49',
				drawerActiveTintColor:'#fff',
				drawerInactiveTintColor:'#fff'

			}}>
			<Drawer.Screen 
				name="StackRoute" 
				component={StackRoute}
				options={{
					title: 'Home',
					drawerIcon:({focused, size, color}) => (
						<MaterialCommunityIcons name={focused ? 'movie-open' : 'movie-outline'} size={size} color={color} />
					),
					headerShown:false
				}}
			/>
			<Drawer.Screen name="Produtos" component={Produtos} />
		</Drawer.Navigator>
	);
};

export default DrawerRoute;
