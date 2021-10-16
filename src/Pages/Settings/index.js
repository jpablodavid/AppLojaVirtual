import React from "react";
import { View , Text, TouchableOpacity, Image} from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome5";

import Header from '../../components/Header';

import { theme } from "../../global/styles/theme";


const Settings = () => {
	return (
		<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
			<Header back={true}/>

			<View style={{ flex: 1 }}>
				<View
					style={{
						flexDirection: "row",
						height: 90,
						borderBottomWidth: 1,
						borderTopWidth: 1,
						borderColor: `${theme.colors.primary}`,
						alignItems: "center",
						padding: 20,
						backgroundColor: `${theme.colors.secondary}`,
					}}
				>
					<Image
						style={{ width: 60, height: 60, borderRadius: 30 }}
						source={require("../../assets/login.png")}
					/>
					<Text
						style={{
							fontSize: 22,
							fontWeight: "bold",
							marginLeft: 15,
							marginBottom: -15,
						}}
					>
						Olá Usuario
					</Text>
				</View>
				<View
					style={{
						height: 70,
						borderBottomWidth: 1,
						borderColor: `${theme.colors.primary}`,
						justifyContent: "center",
						padding: 20,
					}}
				>
					<TouchableOpacity
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Icon name={"gift"} size={24} color={"#000"} />
						<Text style={{ marginLeft: 10, fontSize: 16 }}>Meus Pedidos</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						height: 70,
						borderBottomWidth: 1,
						borderColor: `${theme.colors.primary}`,
						justifyContent: "center",
						padding: 20,
					}}
				>
					<TouchableOpacity
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Icon name={"id-card"} size={24} color={"#000"} />
						<Text style={{ marginLeft: 10, fontSize: 16 }}>Meus Dados</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						height: 70,
						borderBottomWidth: 1,
						borderColor: `${theme.colors.primary}`,
						justifyContent: "center",
						padding: 20,
					}}
				>
					<TouchableOpacity
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Icon name={"life-ring"} size={24} color={"#000"} />
						<Text style={{ marginLeft: 10, fontSize: 16 }}>Ajuda</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ justifyContent: "center", padding: 30 }}>
				<TouchableOpacity
					style={{
						alignItems: "center",
						height: 40,
						justifyContent: "center",
						borderWidth: 1,
						borderColor: `${theme.colors.primary}`,
						backgroundColor: `${theme.colors.secondary}`,
						borderRadius: 7,
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "bold",
							color: `${theme.colors.primary}`,
						}}
					>
						Fechar Sessão
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Settings;
