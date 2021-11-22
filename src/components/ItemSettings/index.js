import React from "react";
import { Container, ButtonMain, Title } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const ItemSettings = ({ icon, title }) => {
	return (
		<Container>
			<ButtonMain>
				<Icon name={icon} size={24} color={"#000"} />
				<Title>{title}</Title>
			</ButtonMain>
		</Container>
	);
};

export default ItemSettings;
