import { StyleSheet,Text, View, Dimensions } from "react-native";
import TabNavigator from "../../Components/TabNavigator";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function About() {
    return (
        <View style={styles.container}>
            <Text>
                About
            </Text>
            
            <View style = {styles.footer}>
                <TabNavigator/>
            </View>
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
