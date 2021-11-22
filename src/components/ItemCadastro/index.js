import React from "react";
import { Container, Input } from "./styles";

const ItemCadastro = ({ value, placeHolder, onChange }) => {
	return (
		<Container>
			<Input
				placeholder={placeHolder}
				autoCorrect={false}
				onChangeText={(text) => onChange(text)}
				value={value}
			/>
		</Container>
	);
};

export default ItemCadastro;
