import React from "react";
import { ScrollView } from "react-native";
import { Container } from "./styles";

import Header from "../../components/Header";
import ProdutosView from "../../components/ProdutosView";



const Outlet = ({ dataOutlet }) => {
	
	return (
		<Container>
			<Header back={true} titulo={"Outlet"} />

			<ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
				<ProdutosView data={dataOutlet} />
			</ScrollView>
		</Container>
	);
};

export default Outlet;
