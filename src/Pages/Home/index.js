import React, { useState } from "react";
import { Container, ProdutosContainer } from "./styles";

import { View } from "react-native";

import Header from "../../components/Header";
import Slider from "../../components/Slider/Slider";
import Produtos from "../../components/Produtos/Produtos";
import { useNavigation} from "@react-navigation/native";


const Home = () => {

	const navigation = useNavigation();
	
	return (
		<Container>
			<Header back={false} />
			<View>
				<Slider />
			</View>

			<ProdutosContainer
				horizontal={false}
				showsHorizontalScrollIndicator={false}
				data={[1, 2, 3, 4, 5]}
				renderItem={({ item }) => (
					<View
						style={{ flexDirection: "row", justifyContent: "space-around" }}
					>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require("../../assets/item1.png")}
								preco="R$ 140,00"
								desc="Informações sobre o produto tipo, material essas coisas"
								titulo="CALCINHA BIQUINI RENDA AMAZONIA"
								onClick={() => navigation.navigate('Details')}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require("../../assets/item2.png")}
								preco="R$ 140,00"
								desc="Informações sobre o produto tipo, material essas coisas"
								titulo="CALCINHA BIQUINI RENDA AMAZONIA"
							/>
						</View>
					</View>
				)}
			></ProdutosContainer>
		</Container>
	);
};

export default Home;
