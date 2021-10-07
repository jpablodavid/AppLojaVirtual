import React from "react";
import { View } from "react-native";
import { Container, ProdutosContainer } from './styles';

import Produtos from "../../components/Produtos/Produtos";
import { useNavigation } from "@react-navigation/native-stack";
import Slider from "../../components/Slider/Slider";

import { theme } from "../../global/styles/theme";

const Home = ({ navigation }) => {
    //const navigation = useNavigation();

	return (
		<Container>

			<View style={{marginTop: -10}}>
				<Slider/>
			</View>

			<ProdutosContainer
				horizontal={false}
				data={[1, 2, 3, 4, 5]}
				renderItem={({ item }) => (
					<View
						style={{ flexDirection: "row", justifyContent: "space-around" }}
					>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require('../../assets/item1.png')}
								preco="R$ 140,00"
								onClick={() => navigation.navigate("Details")}
							>
								Nike Air Max Dia
							</Produtos>
						</View>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require('../../assets/item2.png')}
								preco="R$ 140,00"
								onClick={() => navigation.navigate("Details")}
							>
								Nike Air Max Dia
							</Produtos>
						</View>
					</View>
				)}
			></ProdutosContainer>
		</Container>
	);
};

export default Home;
