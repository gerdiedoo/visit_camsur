import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, View, Dimensions, useWindowDimensions } from "react-native";
import TabNavigator from "../../Components/TabNavigator";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Leaderboard() {
    const {width, height} = useWindowDimensions();
    return (
        <View style = {styles.container}>
            <Text> Leaderboard </Text>
            {/* <StatusBar style = "auto"/> */}
            {/* <View style={styles.footer}>
                <TabNavigator></TabNavigator>
            </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footer: {
        position: 'absolute',
        height: 100,
        left: 0, 
        top: windowHeight-100, 
        width: windowWidth,
    }
});