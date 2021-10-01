import React from "react";
import { View, StyleSheet, Text, ScrollView, F} from "react-native";
import { Container, Destaques, ProdutosContainer } from './styles'

import Produtos from "../../components/Produtos/Produtos";
import { useNavigation } from "@react-navigation/core";

const Home = ({ navigation }) => {
    //const navigation = useNavigation();

	return (
		<Container>
			<Destaques>
				<Text style={{ fontSize: 28, color: "#fff" }}>Destaques</Text>
			</Destaques>
				<ProdutosContainer
					horizontal={false}
					data={[1, 2, 3, 4, 5]}
					renderItem={({ item }) => (
						<Produtos
							img={require(`../../assets/item${item}.png`)}
							preco="R$ 140,00"
							onClick={() => navigation.navigate("Details")}
						>
							Nike Air Max Dia
						</Produtos>
					)}
				>
					{/* <Produtos
							img={require("../../assets/item1.png")}
							preco="R$ 140,00"
							onClick={() => navigation.navigate("Details")}
						>
							Nike Air Max Dia
						</Produtos>
						<Produtos
							img={require("../../assets/item2.png")}
							preco="R$ 190,00"
							onClick={() => alert("clicou")}
						>
							Nike Donhilll
						</Produtos>
						<Produtos
							img={require("../../assets/item2.png")}
							preco="R$ 190,00"
							onPress={() => alert("clicou")}
						>
							Nike Donhilll
						</Produtos>
						<Produtos
							img={require("../../assets/item2.png")}
							preco="R$ 190,00"
							onPress={() => alert("clicou")}
						>
							Nike Donhilll
						</Produtos>
						<Produtos
							img={require("../../assets/item2.png")}
							preco="R$ 190,00"
							onPress={() => alert("clicou")}
						>
							Nike Donhilll
						</Produtos>	 */}
				</ProdutosContainer>
			
		</Container>
	);
};

const styles = StyleSheet.create({});

export default Home;
