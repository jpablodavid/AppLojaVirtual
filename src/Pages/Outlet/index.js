import React from "react";
import { Container, ContainerProdutos } from "./styles";
import Header from "../../components/Header";
import ProdutosView from "../../components/ProdutosView";


const Outlet = ({ dataOutlet }) => {
	
	return (
		<Container>
			<Header back={true} titulo={"Outlet"} />

			<ContainerProdutos showsHorizontalScrollIndicator={false}>
				<ProdutosView data={dataOutlet} />
			</ContainerProdutos>
		</Container>
	);
};

export default Outlet;
