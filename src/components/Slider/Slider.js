import React from 'react';
import { Image, Text, View } from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import { FontAwesome5 } from "@expo/vector-icons";

import { theme } from '../../global/styles/theme';


const slides = [
	{
		key: 1,
		title: "Lançamentos",
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
		title: "Mais Visitados",
		desc: "alguma coisa falando sobre",
		image: require("../../assets/slide3.png"),
	},
];

const Slider = () => {

    const renderSlides = ({item}) => {
        return (
					<View style={{ position: "relative" }}>
						<Image
							source={item.image}
							style={{
								resizeMode: "cover",
								height: 200,
								width: "100%",
							}}
						/>
						<Text
							style={{
								fontSize: 20,
								color: `${theme.colors.tertiary}`,
								position: "absolute",
								left: 10,
								top: 10
							}}
						>
							{item.title}
						</Text>
						<Text
							style={{
								color: `${theme.colors.tertiary}`,
								position: "absolute",
								left: 15,
								top: 35
							}}
						>
							{item.desc}
						</Text>
					</View>
				);
    } 
    
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
}

export default Slider;