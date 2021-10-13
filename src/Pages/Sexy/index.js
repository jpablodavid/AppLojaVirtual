import React, { useState } from "react";
import { View, Text} from "react-native";
import { Container, ProdutosContainer, TitleContainer, Title} from "./styles";

import Header from "../../components/Header";
import Produtos from "../../components/Produtos/Produtos";


const Sexy = () => {
	

	return (
		<Container>
			<Header back={true} />
			<TitleContainer>
				<Title>Sexy</Title>
			</TitleContainer>

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
							/>
						</View>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require("../../assets/item1.png")}
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

export default Sexy;
