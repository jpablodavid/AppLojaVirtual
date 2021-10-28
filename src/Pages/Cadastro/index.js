import React, { useState } from "react";
import { View, TextInput } from "react-native";
import firebase from '../../firebaseConnection';
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";

const Cadastro = ({route , setLogado}) => {

	const navigation = useNavigation();

	const {uid, email} = route.params;

	const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
	const [nasc, setNasc] = useState("");
	const [tel, setTel] = useState("");
	const [cep, setCep] = useState("");
	const [endereco, setEndereco] = useState([]);

	const criarUsuario = async () =>{
		await firebase.database().ref("usuarios").child(uid).set({
			nome: nome,
			email: email,
			cpf: cpf,
			dataNascimento: nasc,
			telefone: tel,
			cep: cep,
			endereco: endereco
		}).catch((error) => {alert(error)});
		alert('Bem-vindo ' + nome)
		setLogado(true);
		
		navigation.navigate("Home");

	};

	return (
		<View style={{ flex: 1, backgroundColor: `${theme.colors.tertiary}` }}>
			<Header back={true} titulo={"Cadastro"} />

			<View style={{ flex: 1 }}>
				<View
					style={{
						height: 70,
						borderBottomWidth: 1,
						borderColor: `${theme.colors.primary}`,
						justifyContent: "center",
						padding: 20,
					}}
				>
					<TextInput
						style={{
							fontSize: 17,
							borderRadius: 7,
							padding: 10,
						}}
						placeholder="Nome"
						autoCorrect={false}
						onChangeText={(text) => setNome(text)}
						value={nome}
					/>
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
					<TextInput
						style={{
							fontSize: 17,
							borderRadius: 18,
							padding: 10,
						}}
						placeholder="CPF"
						autoCorrect={false}
						onChangeText={(text) => setCpf(text)}
						value={cpf}
					/>
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
					<TextInput
						style={{
							fontSize: 17,
							borderRadius: 18,
							padding: 10,
						}}
						placeholder="Data Nascimento"
						autoCorrect={false}
						onChangeText={(text) => setNasc(text)}
						value={nasc}
					/>
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
					<TextInput
						style={{
							fontSize: 17,
							borderRadius: 18,
							padding: 10,
						}}
						placeholder="Telefone"
						autoCorrect={false}
						onChangeText={(text) => setTel(text)}
						value={tel}
					/>
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
					<TextInput
						style={{
							fontSize: 17,
							borderRadius: 18,
							padding: 10,
						}}
						placeholder="CEP"
						autoCorrect={false}
						onChangeText={(text) => setCep(text)}
						value={cep}
					/>
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
					<TextInput
						style={{
							fontSize: 17,
							borderRadius: 18,
							padding: 10,
						}}
						placeholder="Endereço"
						autoCorrect={false}
						onChangeText={(text) => setEndereco(text)}
						value={endereco}
					/>
				</View>
			</View>
			<View style={{ justifyContent: "center", padding: 30 }}>
				<ButtonMain
					height={40}
					width="100%"
					backgroundColor={`${theme.colors.secondary}`}
					text="Cadastrar"
					textColor={`${theme.colors.primary}`}
					borderWidth={1}
					onPress={criarUsuario}
				/>
			</View>
		</View>
	);
};

export default Cadastro;
