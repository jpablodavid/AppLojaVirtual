import React from "react";
import { Container, ContainerProdutos } from "./styles";


import Header from "../../components/Header";
import ProdutosView from '../../components/ProdutosView';


const Lancamentos = ({ dataLancamentos }) => {
	return (
		<Container>
			<Header back={true} titulo={"Lancamentos"} />

			<ContainerProdutos showsHorizontalScrollIndicator={false}>
				<ProdutosView data={dataLancamentos} />
			</ContainerProdutos>
		</Container>
	);
};

export default Lancamentos;
