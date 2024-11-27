/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type React from "react";
import { Button } from "@ant-design/react-native";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

function App(): React.JSX.Element {
	return (
		<SafeAreaView>
			<StatusBar />
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<View>
					<Text>hello world!</Text>
					<Button>click me</Button>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default App;
