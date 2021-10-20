import React from "react";
import { View , Text, TouchableOpacity, Image} from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

import ButtonMain from "../../components/ButtonMain";

import Header from '../../components/Header';

import { theme } from "../../global/styles/theme";



const Settings = () => {

	const navigation = useNavigation();

	const logout = async () => {
		await firebase.auth().signOut();
		alert('logout')
		navigation.navigate('MyAccount', { logado });
	}
	return (
		<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
			<Header back={true} titulo={'Configurações'}/>

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
				<ButtonMain
					height={40}
					width="100%"
					backgroundColor={`${theme.colors.secondary}`}
					text="Fechar Sessão"
					textColor={`${theme.colors.primary}`}
					borderWidth={1}
					onPress={logout}
				/>
			</View>
		</View>
	);
};

export default Settings;
