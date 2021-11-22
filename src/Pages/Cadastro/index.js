import React, { useState } from "react";
import { Container, ContainerButton, ContainerCadastro } from "./styles";
import firebase from "../../firebaseConnection";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";

import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";
import ItemCadastro from "../../components/ItemCadastro";

const Cadastro = ({ route, setLogado, setUsuario }) => {
	const navigation = useNavigation();

	const { uid, email , senha} = route.params;

	const [nome, setNome] = useState("");
	const [avatar, setAvatar] = useState();
	const [cpf, setCpf] = useState("");
	const [nasc, setNasc] = useState("");
	const [tel, setTel] = useState("");
	const [cep, setCep] = useState("");
	const [endereco, setEndereco] = useState([]);

	const LoadUsuario = async (uid) => {
		await firebase
			.database()
			.ref("usuarios")
			.once("value", (snapshot) => {
				setUsuario({}); // ou key
				snapshot.forEach((item) => {
					let user = {
						uid: item.key,
						cep: item.val().cep,
						cpf: item.val().cpf,
						dataNascimento: item.val().dataNascimento,
						email: item.val().email,
						endereco: item.val().endereco,
						nome: item.val().nome,
						avatar: item.val().avatar,
						telefone: item.val().telefone,
					};
					setUsuario(user);
				});
			});
	};

	const criarUsuario = async () => {
		await firebase
			.database()
			.ref("usuarios")
			.child(uid)
			.set({
				nome: nome,
				avatar: avatar,
				email: email,
				cpf: cpf,
				dataNascimento: nasc,
				telefone: tel,
				cep: cep,
				endereco: endereco,
			})
			.catch((error) => {
				alert(error);
			});
		alert("Bem-vindo " + nome);

		await firebase
			.auth()
			.signInWithEmailAndPassword(email, senha)
			.then((value) => {
				LoadUsuario(value.user.uid);
				setLogado(true);
				navigation.navigate("Home");
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<Container>
			<Header back={true} titulo={"Cadastro"} />

			<ContainerCadastro>
				<ItemCadastro value={nome} placeHolder={"Nome"} onChange={setNome} />

				<ItemCadastro value={avatar} placeHolder={"Avatar"} onChange={setAvatar} />

				<ItemCadastro value={cpf} placeHolder={"CPF"} onChange={setCpf} />

				<ItemCadastro
					value={nasc}
					placeHolder={"Data Nascimento"}
					onChange={setNasc}
				/>

				<ItemCadastro value={tel} placeHolder={"Telefone"} onChange={setTel} />

				<ItemCadastro value={cep} placeHolder={"CEP"} onChange={setCep} />

				<ItemCadastro
					value={endereco}
					placeHolder={"Endereco"}
					onChange={setEndereco}
				/>
			</ContainerCadastro>
			<ContainerButton>
				<ButtonMain
					height={40}
					width="100%"
					backgroundColor={`${theme.colors.secondary}`}
					text="Cadastrar"
					textColor={`${theme.colors.primary}`}
					borderWidth={1}
					onPress={criarUsuario}
				/>
			</ContainerButton>
		</Container>
	);
};

export default Cadastro;
