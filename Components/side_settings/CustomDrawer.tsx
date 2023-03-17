import react from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native"

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    return (
        // take up all available space within its container
        <View style={styles.container}>
            
            <DrawerContentScrollView {...props}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
                    <View style={styles.profile}>
                        <View style={styles.profileCenter}>
                            <Image
                                source={require('../../assets/home.png')}
                                style={styles.profileImage}
                                />
                        </View>
                        <Text style={styles.name}>
                            John Doe
                        </Text>
                    </View>

                </TouchableWithoutFeedback>

                <View style={styles.drawerList} >
                    <DrawerItemList  {...props}>

                    </DrawerItemList>
                </View>
                
            </DrawerContentScrollView>
            <View>
                <Text>
                    prototype
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginLeft :10,
        marginRight :10,
        marginTop:30,
        marginBottom: 10
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        padding: 20,
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 20,
        marginTop: 20,
        elevation: 5,
    },
    profileCenter: {
        backgroundColor: '#fff',
        borderRadius:100,
        borderWidth: 2,
        borderColor: '#282828',
        padding: 30,
        elevation: 5,
    },
    profileImage: {// need fixing, temporary solution
        width:50,
        height:50,
    },
    drawerList: {
        marginLeft: 20,
        marginRight: 20,
    },
    name: {
        marginTop: 5,
        fontSize: 20,
    }
    
  });


export default CustomDrawer;