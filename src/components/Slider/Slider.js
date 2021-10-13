import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { FontAwesome5 } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

const slides = [
	{
		key: 1,
		title: "Lancamentos",
		desc: "alguma coisa falando sobre",
		image: require("../../assets/slide1.png"),
	},
	{
		key: 2,
		title: "Outlet",
		desc: "alguma coisa falando sobre",
		image: require("../../assets/slide2.png"),
	},
	{
		key: 3,
		title: "Sexy",
		desc: "alguma coisa falando sobre",
		image: require("../../assets/slide3.png"),
	},
];

const Slider = () => {

	const navigation = useNavigation();

	const renderSlides = ({ item }) => {

		return (
		    
			<View style={{ position: "relative" , paddingBottom:5}}>
				<TouchableOpacity onPress={() => navigation.navigate(item.title)}>
					<Image
						source={item.image}
						style={{
							resizeMode: "cover",
							height: 200,
							width: "100%",
						}}
					/>
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 20,
						color: `${theme.colors.primary}`,
						fontWeight: 'bold',
						position: "absolute",
						left: 10,
						top: 10,
					}}
				>
					{item.title}
				</Text>
				<Text
					style={{
						color: `${theme.colors.primary}`,
						position: "absolute",
						left: 15,
						top: 35,
					}}
				>
					{item.desc}
				</Text>
			</View>
		);
	};

	return (
		<AppIntroSlider
			renderItem={renderSlides}
			data={slides}
			showDoneButton={false}
			showPrevButton={true}
			dotClickEnabled={true}
			dotStyle={{ backgroundColor: `${theme.colors.dotsSlider}` }}
			activeDotStyle={{
				backgroundColor: `${theme.colors.primary}`,
			}}
			renderNextButton={() => (
				<Text style={{ position: "absolute", bottom: 30, right: 5 }}>
					<FontAwesome5
						name="chevron-right"
						size={24}
						color={`${theme.colors.dotsSlider}`}
					/>
				</Text>
			)}
			renderPrevButton={() => (
				<Text style={{ position: "absolute", bottom: 30, left: 5 }}>
					<FontAwesome5
						name="chevron-left"
						size={24}
						color={`${theme.colors.dotsSlider}`}
					/>
				</Text>
			)}
		/>
	);
};

export default Slider;
