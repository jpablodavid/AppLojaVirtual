import React, { useRef } from "react";
import { Image, View, Dimensions, StyleSheet, Animated } from "react-native";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.45;

const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const Carousel = ({ images }) => {
	const scrolly = useRef(new Animated.Value(0)).current;

	return (
		<View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
			<Animated.FlatList
				data={images}
				keyExtractor={(_, index) => index.toString()}
				snapToInterval={ITEM_HEIGHT}
				decelerationRate="fast"
				showsVerticalScrollIndicator={false}
				bounces={false}
				onScroll={Animated.event([
					{ nativeEvent: { contentOffset: { y: scrolly } } },
				])}
				renderItem={({ item, index }) => {
					return (
						<View>
							<Image
								key={index}
								source={{ uri: `${item}` }}
								style={styles.image}
							/>
						</View>
					);
				}}
			/>
			<View style={styles.pagination}>
				{images.map((_, index) => {
					return <View key={index} style={[styles.dot]} />;
				})}
				<Animated.View
					style={[
						styles.dotIndicator,

						{
							transform: [
								{
									translateY: Animated.divide(scrolly, ITEM_HEIGHT).interpolate(
										{
											inputRange: [0, 1],
											outputRange: [0, DOT_INDICATOR_SIZE],
										}
									),
								},
							],
						},
					]}
				/>
			</View>
		</View>
	);
};

export default Carousel;

const styles = StyleSheet.create({
	image: {
		width: ITEM_WIDTH,
		height: ITEM_HEIGHT,
		resizeMode: "cover",
	},
	pagination: {
		position: "absolute",
		top: ITEM_HEIGHT / 2,
		left: 20,
	},
	dot: {
		width: DOT_SIZE,
		height: DOT_SIZE,
		borderRadius: DOT_SIZE,
		backgroundColor: "black",
		marginBottom: DOT_SPACING,
	},
	dotIndicator: {
		width: DOT_INDICATOR_SIZE,
		height: DOT_INDICATOR_SIZE,
		borderRadius: DOT_INDICATOR_SIZE,
		borderWidth: 1,
		borderColor: "black",
		position: "absolute",
		top: -DOT_SIZE / 2,
		left: -DOT_SIZE / 2,
	},
});
