import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, F} from "react-native";
import { Container, Destaques, ProdutosContainer } from './styles'

import Produtos from "../../components/Produtos/Produtos";
import { useNavigation } from "@react-navigation/core";
import Slider from "../../components/Slider/Slider";


const Home = ({ navigation }) => {
    //const navigation = useNavigation();

	return (
		<Container>
			<Slider style={{flex:.5}}/>
			{/* <Destaques>

				
				
			</Destaques> */}
			<ProdutosContainer
				horizontal={false}
				data={[1, 2, 3, 4, 5]}
				renderItem={({ item }) => (
					<View
						style={{ flexDirection: "row", justifyContent: "space-around" }}
					>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require(`../../assets/item${item}.png`)}
								preco="R$ 140,00"
								onClick={() => navigation.navigate("Details")}
							>
								Nike Air Max Dia
							</Produtos>
						</View>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require(`../../assets/item${item}.png`)}
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

const styles = StyleSheet.create({});

export default Home;
