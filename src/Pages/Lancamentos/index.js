import React from "react";
import { ScrollView } from "react-native";
import { Container } from "./styles";


import Header from "../../components/Header";
import ProdutosView from '../../components/ProdutosView';


const Lancamentos = ({ dataLancamentos }) => {
	return (
		<Container>
			<Header back={true} titulo={"Lancamentos"} />

			<ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
				<ProdutosView data={dataLancamentos} />
			</ScrollView>
		</Container>
	);
};

export default Lancamentos;
