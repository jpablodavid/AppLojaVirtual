import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { theme } from '../../global/styles/theme';

const ButtonMain = ({
	height,
	width,
	backgroundColor,
	text,
	textColor,
	borderWidth,
	onPress,
}) => {
	return (
		<TouchableOpacity
			style={{
				width: width,
				height: height,
				backgroundColor: `${backgroundColor}`,
				alignItems: "center",
				justifyContent: "center",
				borderRadius: 7,
				borderWidth: borderWidth,
				borderColor: `${textColor}`,
			}}
			onPress={onPress}
		>
			<Text
				style={{
					color: `${textColor}`,
					fontSize: 20,
					fontWeight: "bold",
					fontFamily: `${theme.fonts.title700}`
				}}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default ButtonMain;
