import React, { useState } from "react";
import { Container, ProdutosContainer } from "./styles";

import { View } from "react-native";

import Produtos from "../../components/Produtos/Produtos";
import Slider from "../../components/Slider/Slider";


const Home = () => {
	const [visible, setVisible] = useState(false);

	return (
		<Container>
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
								onClick={() => alert('abrir modal')}
							>
								Nike Air Max Dia
							</Produtos>
						</View>
						<View style={{ flex: 1 }}>
							<Produtos
								img={require("../../assets/item2.png")}
								preco="R$ 140,00"
								onClick={() => alert("Abrir modal")}
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
