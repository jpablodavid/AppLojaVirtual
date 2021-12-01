import React,{useState} from "react";
import { Text, View, Image } from "react-native";
import { RadioButton} from 'react-native-paper';
import {
	Container,
	ContainerDados,
	TextTitulo,
	Opcao,
	Titulo,
	SubTitulo,
	ImagePag,
	ContainerBottom,
	ViewValores,
	ItemValor,
	ViewRow,
	ViewEntrega,
	TextValor,
	ViewButton,
} from "./styles";

import Header from "../../components/Header";
import ItemEnvioPagamento from '../../components/ItemEnvioPagamento';
import ButtonMain from "../../components/ButtonMain";

import { theme } from "../../global/styles/theme";

const EnvioPagamento = ({route, usuario}) => {

	const { data, TotalValor, SubTotal, frete} = route.params;

	const [checked, setChecked] = useState("first");

	const [pagamento, setPagamento] = useState();
	
	return (
		<Container>
			<Header back={true} titulo={"Envio e Pagamento"} />
			<ContainerDados showsVerticalScrollIndicator={false}>
				<Titulo>
					<TextTitulo>Dados do envio</TextTitulo>
				</Titulo>
				<Opcao>
					<SubTitulo>Meus Endereços</SubTitulo>
					<ViewRow>
						<RadioButton
							uncheckedColor={`${theme.colors.secondary}`}
							color={`${theme.colors.primary}`}
							value="first"
							status={checked === "first" ? "checked" : "unchecked"}
							onPress={() => setChecked("first")}
						/>
						<Text>{usuario.endereco}</Text>
					</ViewRow>
				</Opcao>
				<Titulo>
					<TextTitulo>Dados de Pagamento</TextTitulo>
				</Titulo>
				<Opcao>
					<SubTitulo>Selecione a forma de Pagamento:</SubTitulo>
					<ViewRow>
						<RadioButton
							uncheckedColor={`${theme.colors.secondary}`}
							color={`${theme.colors.primary}`}
							value="credito"
							status={pagamento === "credito" ? "checked" : "unchecked"}
							onPress={() => setPagamento("credito")}
						/>
						<ImagePag source={require("../../assets/cartao.png")} />
						<Text>Credito</Text>
					</ViewRow>
					<ViewRow>
						<RadioButton
							uncheckedColor={`${theme.colors.secondary}`}
							color={`${theme.colors.primary}`}
							value="boleto"
							status={pagamento === "boleto" ? "checked" : "unchecked"}
							onPress={() => setPagamento("boleto")}
						/>
						<ImagePag source={require("../../assets/boleto.png")} />
						<Text>Boleto Bancario</Text>
					</ViewRow>
					<ViewRow>
						<RadioButton
							uncheckedColor={`${theme.colors.secondary}`}
							color={`${theme.colors.primary}`}
							value="pix"
							status={pagamento === "pix" ? "checked" : "unchecked"}
							onPress={() => setPagamento("pix")}
						/>
						<ImagePag source={require("../../assets/pix.jpeg")} />
						<Text>PIX</Text>
					</ViewRow>
				</Opcao>
				<Titulo>
					<TextTitulo>Detalhe do pedido</TextTitulo>
				</Titulo>
				<ViewEntrega>
					<Text>
						Entrega: <Text>ter 14 dez - quar 15 dez</Text>
					</Text>
				</ViewEntrega>

				{data.map((item) => {
					return <ItemEnvioPagamento data={item} />;
				})}

				<ContainerBottom>
					<ViewValores>
						<ItemValor>
							<Text>Sub-Total</Text>
							<Text>R$ {SubTotal.toFixed(2)}</Text>
						</ItemValor>
						<ItemValor>
							<Text>Frete</Text>
							<Text>R$ {frete.toFixed(2)}</Text>
						</ItemValor>
						<ItemValor>
							<TextValor>Total: </TextValor>
							<TextValor>R$ {TotalValor}</TextValor>
						</ItemValor>
					</ViewValores>
					<ViewButton>
						<ButtonMain
							height={40}
							width={300}
							backgroundColor={`${theme.colors.primary}`}
							text={`Comprar / R$ ${TotalValor}`}
							textColor={`${theme.colors.tertiary}`}
							borderWidth={1}
							onPress={() => {}}
						/>
					</ViewButton>
				</ContainerBottom>
			</ContainerDados>
		</Container>
	);
};

export default EnvioPagamento;
