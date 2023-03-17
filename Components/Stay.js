// import {  SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView } from 'react-native'
// import React from 'react'
// import { useNavigation } from "@react-navigation/native"
// import React, { useLayoutEffect } from 'react'

// import StayItem from '../Screens/StayItem';
// import Stay_data from '../Stay_data';

// import BottomButtons from '../Components/BottomButtons';

// const Stay = () => {
//     const [text, onChangeText] = React.useState('');
    
//     const navigation = useNavigation();
//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerShown: false,
//         })
//     },[]);
//     return (
//         <SafeAreaView style ={{flex: 1}}>

//             <View style={styles.containerMain}>
//                 <ScrollView style={styles.scrollView}>
//                     <Text style={styles.textsubtitle}>Hello John!</Text>
//                     <Text>Explore the beauty of Camsur</Text>
//                     <View style={styles.SectionStyle}> 
//                         <Image style={styles.imgshow} source={require('../assets/Show.png')} />
//                         <TextInput style={styles.input} 
//                         value={text} 
//                         onChangeText={onChangeText} 
//                         placeholder="Search"/>
//                     </View>
                    
//                     <Text style={styles.textsubtitle}>Experience</Text>
//                     <View style={styles.SectionStyle}>
//                         <Text style= {[styles.textpopular, { borderBottomColor: 'lightgreen', borderBottomWidth: 2,}]}>Popular</Text>
//                         <Text style= {[styles.textplace, { borderBottomColor: 'black', borderBottomWidth: 2,}]}></Text>
//                     </View>
//                     <FlatList style={styles.carousel}
//                         data={Stay_data} 
//                         renderItem={({ item }) =>  <StayItem item = {item}/>}
//                         horizontal
//                         showsHorizontalScrollIndicator
//                         // pagingEnabled
//                         bounces={false}
//                     />
//                 </ScrollView>
//                 <View style={styles.bottomView}>
//                   <BottomButtons/>
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// };

// export default Stay;

// const styles = StyleSheet.create({
//     containerMain: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     bottomView: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'absolute', 
//         bottom: 20, 
//     },
//     SectionStyle:{
//         flexDirection: 'row',
//     },
//     imgshow:{
//         marginTop: 10,
//         width: 30,
//         height: 30,
//     },
//     input: {
//         flex:1,
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     },
//     textpopular:{
//         flex: 0.5,
//         fontSize: 20,
//     },
//     textplace:{
//         flex: 0.5,
//     },
//     textsubtitle:{
//       fontSize: 30
//     },
//     carousel:{
//         marginTop: 10,

//     },
//   });
  