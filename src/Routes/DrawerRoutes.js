import * as React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/Drawer";

import Home from '../Pages/Home'

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
	return <Drawer.Screen name="Home" component={Home} />;
};

export default DrawerRoutes;
