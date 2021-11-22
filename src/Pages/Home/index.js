import React from "react";
import { Container, ContainerProdutos, ViewSlider} from "./styles";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import Slider from "../../components/Slider/Slider";
import ProdutosView from "../../components/ProdutosView";

const Home = ({dataHome}) => {

	const navigation = useNavigation();
	
	return (
		<Container>
			<Header back={false} />
			<ViewSlider>
				
				<Slider />
				
			</ViewSlider>
			<ContainerProdutos showsHorizontalScrollIndicator={false}>
				<ProdutosView data={dataHome} />
			</ContainerProdutos>
		</Container>
	);
};

export default Home;
