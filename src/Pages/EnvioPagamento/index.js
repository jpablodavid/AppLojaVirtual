import React from "react";
import { Text, View } from "react-native";
import {
	Container,
	ContainerDados,
	TextTitulo,
	Opcao,
	Titulo,
	ContainerBottom,
	ViewValores,
	ItemValor,
	TextValor,
	ViewButton,
} from "./styles";

import Header from "../../components/Header";
import ItemEnvioPagamento from '../../components/ItemEnvioPagamento';
import ButtonMain from "../../components/ButtonMain";

import { theme } from "../../global/styles/theme";

const EnvioPagamento = ({route}) => {

	const { data, TotalValor, SubTotal, frete} = route.params;
	
	return (
		<Container>
			<Header back={true} titulo={"Envio e Pagamento"} />
			<ContainerDados>
				<Titulo>
					<TextTitulo>Dados do envio</TextTitulo>
				</Titulo>
				<Opcao></Opcao>
				<Titulo>
					<TextTitulo>Dados de Pagamento</TextTitulo>
				</Titulo>
				<Opcao></Opcao>
				<Titulo>
					<TextTitulo>Detalhe do pedido</TextTitulo>
				</Titulo>
				<View style={{borderBottomWidth: 1, borderColor: "#000"}}>
					<Text>
						Entrega: <Text>ter 14 dez - quar 15 dez</Text>
					</Text>
				</View>


				{
					data.map((item) => {
						return(<ItemEnvioPagamento data={item} />)
					})
				}

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
