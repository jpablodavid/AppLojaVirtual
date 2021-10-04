import React from 'react';
import { Image, Text, View } from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import { FontAwesome5 } from "@expo/vector-icons";


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
					<View style={{ flex: 1 }}>
						<Image
							source={item.image}
							style={{
								resizeMode: "cover",
								height: 200,
								width: "100%",
								zIndex:1,
							}}
						/>
						<Text style={{ color: "#fff", position: "absolute" }}>
							{item.title}
						</Text>
						<Text style={{ color: "#fff", position: "absolute" }}>
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
				activeDotStyle={{
					backgroundColor: "#009cff",
				}}
				renderNextButton={() => 
					<Text style={{color:'#fff'}}>next</Text>
				}
				renderPrevButton={() => 
                    <Text style={{color:'#fff'}}>Back</Text>
                }
			/>
		);
}

export default Slider;