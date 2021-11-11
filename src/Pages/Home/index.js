import React from "react";
import { Container } from "./styles";
import { View , ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import Slider from "../../components/Slider/Slider";
import ProdutosView from "../../components/ProdutosView";

const Home = ({dataHome}) => {

	const navigation = useNavigation();
	
	return (
		<Container>
			<Header back={false} />
			<View>
				<Slider />
			</View>

			<ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
				<ProdutosView data={dataHome} />
			</ScrollView>
		</Container>
	);
};

export default Home;
