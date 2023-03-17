import {  TouchableOpacity, Modal, Button, SafeAreaView, Text, StyleSheet, View, TextInput, FlatList, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

import StayItem from './StayItem';
import StayTab from './StayTab';
import { Dimensions, Platform, PixelRatio } from 'react-native';
import Stay_data from '../Stay_data';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size: number) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const Stay = () => {
    const [text, onChangeText] = React.useState('');
    const [showModal, setshowModal] = useState(false);
    
    return (
        // <SafeAreaView style ={[styles.contain, {flex: 1}]}>
                <View style={styles.containerMain}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.textsubtitle}>Hello John!</Text>
                        <Text>Explore the beauty of Camsur</Text>
                        <View style={styles.SectionStyle}> 
                            <Image style={styles.imgshow} source={require('../assets/Show.png')} />
                            <TextInput style={styles.input} 
                            value={text} 
                            onChangeText={onChangeText} 
                            placeholder="Search"/>
                        </View>
                        
                        <Text style={styles.title}>Experience</Text>
                        <View style={styles.SectionStyle}>
                            <Text style= {[styles.textpopular, { borderBottomColor: 'black', borderBottomWidth: 2,}]}>Popular</Text>
                            {/* <Text style= {[styles.textplace, { borderBottomColor: 'black', borderBottomWidth: 2,}]}></Text> */}
                        </View>
                        <FlatList style={styles.carousel}
                            data={Stay_data} 
                            renderItem={({ item }) =>  <StayItem item = {item}/>}
                            horizontal
                            showsHorizontalScrollIndicator
                            // pagingEnabled
                            bounces={false}
                        />
                        
                        <Text style= {[styles.textRecommended, { borderBottomColor: 'black', borderBottomWidth: 2,}]}>Recommended</Text>
                        <View style={styles.SectionStyle1}>
                            <Image style={styles.imgRecommended} source={require('../assets/Images/Accomodation/parkview.png')} />
                            {/* <Text>asdasda</Text> */}
                            <Text style ={[styles.texttitle, {}]}>
                                Parkview Hotel{'\n'}
                                <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Text style={{fontSize:normalize(9), fontWeight:'300'}}> (2.3k reviews)</Text>
                                {'\n'} 
                                <Image style={[styles.imgloc, {}]} source={require('../assets/Images/Accomodation/location.png')} />
                                <Text style={{fontSize:normalize(10), fontWeight:'500', marginBottom:100}}> Maninang Drive, City of Iriga</Text> 
                               
                            </Text> 
                            <TouchableOpacity  style={styles.touchable} onPress={() =>
                                {
                                    setshowModal(!showModal);
                                }}>
                                <Image style={[styles.btn, {resizeMode: 'contain' }]} source={require('../assets/Images/Accomodation/Visit_btn.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.SectionStyle1}>
                            <Image style={styles.imgRecommended} source={require('../assets/Images/Accomodation/iriga_plaza_hotel.png')} />
                            {/* <Text>asdasda</Text> */}
                            <Text style ={[styles.texttitle, {}]}>
                                Iriga Plaza Hotel{'\n'}
                                <Image style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Image style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Image style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Image style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Image style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                                <Text style={{fontSize:normalize(9), fontWeight:'200'}}>( 3.3k reviews)</Text>
                                {'\n'} 
                                <Image style={[styles.imgloc, {}]} source={require('../assets/Images/Accomodation/location.png')} />
                                <Text style={{fontSize:normalize(10), fontWeight:'500', width:50}}> Lourdes Hospital Road, City of Iriga</Text> 
                                    
                            </Text>
                            <TouchableOpacity style={styles.touchable} onPress={() =>
                                    {
                                        setshowModal(!showModal);
                                    }}>
                                    <Image style={[styles.btn, {resizeMode: 'contain' }]} source={require('../assets/Images/Accomodation/Visit_btn.png')} />
                                </TouchableOpacity>
                        </View>

                        {/* <View style={[styles.modal1, {}]}>
                            <Modal animationType='fade' transparent={false} 
                            visible={showModal} 
                            >
                                <View style={[styles.modal2, {}]}>
                                    <Button title="close" 
                                    onPress={() =>
                                    {
                                        setshowModal(!showModal);
                                    }}>

                                    </Button>
                                    <StayTab />
                                </View>

                            </Modal>
                        </View> */}
                        {/* <View style={styles.none}>
                            
                        </View> */}
                    </ScrollView>
                    <View style={styles.bottomView}>
                    </View>
                </View>
        // </SafeAreaView>
    );
};

export default Stay;

const styles = StyleSheet.create({
    contain:{
        
    },
    scrollView:{
        marginLeft:10,
        marginRight:10,
        marginTop:20,
    },
    containerMain: {
        backgroundColor: '#fff',
        // backgroundColor: '#faebd7',
        // backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'center',
        // marginBottom:-30,
    },
    bottomView: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        bottom: 20, 
    },
    SectionStyle:{
        flexDirection: 'row',
    },
    imgshow:{
        marginTop: 15,
        width: normalize(23),
        height: normalize(23),
    },
    input: {
        flex:1,
        height: normalize(25),
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    textpopular:{
        marginTop:10,
        flex: 1,
        fontSize: normalize(15),
    },
    textsubtitle:{
      fontSize: normalize(25),
    },
    title:{
      fontSize: normalize(30),
      fontWeight: '700',
    },
    carousel:{
        marginTop: 20,
        // height: "20%",
        flexGrow: 0,
        

    },
    textRecommended:{
        marginTop:10,
        fontSize: normalize(15),
        fontWeight: '500',
    },
    
    SectionStyle1:{
        // justifyContent: "flex-start",
        flex:1,
        flexDirection: 'row',
        // alignItems: "center",
        // justifyContent: "space-between",
        marginTop:20,
        marginBottom:20,
        margin: 10,
        backgroundColor:'whitesmoke',
        borderRadius:34,
        // backgroundColor: '#faebd7',
    },
    texttitle:{
        fontWeight: '800',
        fontSize: normalize(17),
        flex:1,
        // justifyContent: "flex-start",
        marginLeft:10,
        marginTop:20,
    },
    imgRecommended:{
        flex: 0.8,
        borderTopLeftRadius: 34,
        borderBottomLeftRadius: 34,
        width: normalize(150),
        height: normalize(120),
    },
    imgstar:{
        // flex: 2,
        resizeMode:'cover',
        width: normalize(15),
        height: normalize(15),
        
    },
    imgloc:{
        width: normalize(10),
        height: normalize(13),

    },
    touchable:{
        position:'absolute',
        flex:0,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf:'flex-end',
        marginStart:'85%',
    },
    btn:{
        width: normalize(30),
        height: normalize(30),
    },
    none:{
        marginBottom:"15%",
    },
  });
  