import React from "react";
import { Container, Usuario, Avatar, Name, ContainerButton } from './styles';
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

import Header from '../../components/Header';
import ItemSettings from '../../components/ItemSettings';

import ButtonMain from "../../components/ButtonMain";
import { theme } from "../../global/styles/theme";


const Settings = ({setLogado, usuario}) => {

	const navigation = useNavigation();

	const logout = async () => {
		await firebase.auth().signOut();
		setLogado(false);
		navigation.navigate('Home');
	}

	return (
		<Container>
			<Header back={true} titulo={"Configurações"} />
			<Usuario>
				<Avatar />
				<Name>
					Olá ${usuario.nome}
				</Name>
			</Usuario>
			<ItemSettings icon={'gift'} title={'Meus Pedidos'}/>

			<ItemSettings icon={"id-card"} title={"Meus Dados"}/>
			
			<ItemSettings icon={"headset"} title={"Contato"}/>

			<ItemSettings icon={"life-ring"} title={"Ajuda"}/>
			
			<ContainerButton>
				<ButtonMain
					height={40}
					width="100%"
					backgroundColor={`${theme.colors.secondary}`}
					text="Fechar Sessão"
					textColor={`${theme.colors.primary}`}
					borderWidth={1}
					onPress={logout}
				/>
			</ContainerButton>
		</Container>
	);
};

export default Settings;
