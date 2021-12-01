import React from "react";
import { Image, Text, View, TouchableOpacity} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { FontAwesome5 } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

import { slides } from '../../Data/sliderData';

const Slider = () => {
	
	const navigation = useNavigation();

	const renderSlides = ({ item }) => {
		return (
			<View style={{ position: "relative"}}>
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
						fontSize: 28,
						color: `${theme.colors.primary}`,
						fontWeight: "bold",
						position: "absolute",
						left: 10,
						top: 10,
						fontFamily: `${theme.fonts.title700}`
					}}
				>
					{item.title}
				</Text>
				<Text
					style={{
						color: `${theme.colors.primary}`,
						position: "absolute",
						left: 15,
						top: 40,
						fontFamily: `${theme.fonts.text500}`
					}}
				>
					{item.desc}
				</Text>
			</View>
		);
	};

	return (
		<AppIntroSlider
			data={slides}
			renderItem={renderSlides}
			showSkipButton={true}
			showDoneButton={false}
			showPrevButton={true}
			showNextButton={true}
			dotClickEnabled={true}
			dotStyle={{ top: -90, backgroundColor: `${theme.colors.secondary}` }}
			activeDotStyle={{ top: -90, backgroundColor: `${theme.colors.primary}` }}
			renderNextButton={() => (
				<Text style={{ position: "absolute", top: -150, right: 5 }}>
					<FontAwesome5
						name="chevron-right"
						size={24}
						color={`${theme.colors.primary}`}
					/>
				</Text>
			)}
			renderPrevButton={() => (
				<Text style={{ position: "absolute", top: -150, left: 5 }}>
					<FontAwesome5
						name="chevron-left"
						size={24}
						color={`${theme.colors.primary}`}
					/>
				</Text>
			)}
		/>
	);
};

export default Slider;
