import React, { useState } from "react";
import { View, Text} from "react-native";
import { Container, ProdutosContainer } from "./styles";

import Produtos from "../../components/Produtos/Produtos";

import Details from "../Details";

import { theme } from "../../global/styles/theme";

const Sexy = () => {
	

	return (
		<Container>
			<Text style={{ fontSize: 30 }}>Sexy</Text>

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
								onPress={() => setVisible(true)}
							>
								Nike Air Max Dia
							</Produtos>
						</View>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require("../../assets/item2.png")}
								preco="R$ 140,00"
								onClick={() => alert("oi")}
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

export default Sexy;
