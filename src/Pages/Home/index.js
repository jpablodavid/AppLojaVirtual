import React, { useState, useEffect } from "react";
import { Container, ProdutosContainer } from "./styles";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import Slider from "../../components/Slider/Slider";
import Produtos from "../../components/Produtos/Produtos";

import api, { Key, Host} from "../../services/api";


const Home = () => {

	const [produtos, setProdutos] = useState([]);

	useEffect(() => {

		const loadProdutos = async () => {
			const response = await api.get("products/v2/list", {
				params: {
					category: "women_main",
					pageSize: "48",
					pageNumber: "1",
					sortby: "0",
					filterColor: "BLACK",
					filterSize: "XS/S",
				},
				headers: {
					"x-rapidapi-host": Host,
					"x-rapidapi-key":
						Key,
				},
			});

			console.log(response.data);
			setProdutos(response.data.CatalogProducts);

		};

		loadProdutos();

	}, []);

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
				data={produtos}
				renderItem={({ item }) => (
					<View
						style={{ flexDirection: "row", justifyContent: "space-around" }}
					>
						<View style={{ flex: 1 }}>
							<Produtos
								img={{
									uri: `${item.DefaultProductImage}`,
								}}
								preco={item.ListPrice.toFixed(2)}
								desc={item.Description}
								titulo={item.DisplayName}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<Produtos
								img={{
									uri: `${item.DefaultProductImage}`,
								}}
								preco={item.ListPrice.toFixed(2)}
								desc={item.Description}
								titulo={item.DisplayName}
							/>
						</View>
					</View>
				)}
			></ProdutosContainer>
		</Container>
	);
};

export default Home;
