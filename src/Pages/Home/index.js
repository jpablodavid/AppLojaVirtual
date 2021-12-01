import React from "react";
import { Container, ContainerProdutos, ViewSlider} from "./styles";

import Header from "../../components/Header";
import Slider from "../../components/Slider/Slider";
import ProdutosView from "../../components/ProdutosView";

const Home = ({dataHome}) => {

	
	return (
		<Container>
			<Header back={false} />
			<Slider />
			<ContainerProdutos showsHorizontalScrollIndicator={false}>
				<ProdutosView data={dataHome} />
			</ContainerProdutos>
		</Container>
	);
};

export default Home;
