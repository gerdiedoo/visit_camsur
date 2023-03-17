import { View, Text, Button, Image, StyleSheet, SafeAreaView,TouchableOpacity, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { BrokenHeart, Visit_Camsur,Food} from '../assets';
import BottomButtons from '../Components/BottomButtons';
import heart_img from '../assets/heart_img.png';
import ratings_img from '../assets/ratings_img.png';



const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    bottomView: {
        width: '100%',
        height: 50,
        //justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20, //Here is the trick
    },
    image: {
        flex: 0,
        resizeMode: 'contain',
        width: 150,
        height: 130,
        alignSelf: 'center',
    },
    image2: {
        flex: 0,
        resizeMode: 'contain',
        width: 25,
        height: 25,
        alignSelf: 'center',
    } ,
    image3: {
        flex: 0,
        resizeMode: 'contain',
        position:'absolute',
        width: 50,
        height: 50,
        alignSelf: 'flex-start',
        padding:3,
    } ,
    text1:
    {
        color:'#88DC3D',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "left",
        width: "100%",
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: '5%',
        marginStart: '40%',
        marginEnd: '20%',
    },
    text2:
    {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: "left",
        padding:10,
    },
    borderRad:
    {
        borderWidth: 5,
        borderRadius: 10,
        padding: 5,
        // justifyContent: "center",
        // alignSelf: 'center',
        // marginTop:10,
    },

    //flatlist

    app: {
        flex: 2, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        alignSelf: 'center',
        justifyContent: "center",
        width: 400,
      },
    item: {
        flex: 1,
        maxWidth: "43%", // 100% devided by the number of rows you want
        alignItems: "center",
        alignSelf: 'center',
        
        // my visual styles; not important for the grid
        marginTop:10,
        marginStart:20,
        
        backgroundColor: "#ffffff",
        borderWidth: 1.5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#EAE8ED"
      }
  });

const Item = ({ item }) => {
    return <View style={styles.item}>{item.icon}</View>
  };

  // out here the list of items
  const itemData = [
    {
      icon: (
        <View>
            <TouchableOpacity>
                <Image
                style={styles.image}
                source={Food}
                />
                <Image
                            style={styles.image3}
                            source={ratings_img}
                        />
                <View style={{position:"absolute",
                    backgroundColor: 'rgba(0, 0, 0, .5)',
                    width: 30,
                    height:30,
                    borderWidth: 1.5,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'rgba(0, 0, 0, .5)',
                    alignSelf: 'flex-end',
                    marginTop:10,
                    padding:3,}}>
                        <Image
                            style={styles.image2}
                            source={heart_img}
                        />
                </View>
                <Text style={styles.text2}>
                    Kinalas
                </Text>
            </TouchableOpacity>
        </View>
        
      )
    },
    {
        icon: (
          <View>
              <TouchableOpacity>
                  <Image
                  style={styles.image}
                  source={Food}
                  />
                  <Image
                              style={styles.image3}
                              source={ratings_img}
                          />
                  <View style={{position:"absolute",
                      backgroundColor: 'rgba(0, 0, 0, .5)',
                      width: 30,
                      height:30,
                      borderWidth: 1.5,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: 'rgba(0, 0, 0, .5)',
                      alignSelf: 'flex-end',
                      marginTop:10,
                      padding:3,}}>
                          <Image
                              style={styles.image2}
                              source={heart_img}
                          />
                  </View>
                  <Text style={styles.text2}>
                      Kinalas
                  </Text>
              </TouchableOpacity>
          </View>
          
        )
      },{
        icon: (
          <View>
              <TouchableOpacity>
                  <Image
                  style={styles.image}
                  source={Food}
                  />
                  <Image
                              style={styles.image3}
                              source={ratings_img}
                          />
                  <View style={{position:"absolute",
                      backgroundColor: 'rgba(0, 0, 0, .5)',
                      width: 30,
                      height:30,
                      borderWidth: 1.5,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: 'rgba(0, 0, 0, .5)',
                      alignSelf: 'flex-end',
                      marginTop:10,
                      padding:3,}}>
                          <Image
                              style={styles.image2}
                              source={heart_img}
                          />
                  </View>
                  <Text style={styles.text2}>
                      Kinalas
                  </Text>
              </TouchableOpacity>
          </View>
          
        )
      },{
        icon: (
          <View>
              <TouchableOpacity>
                  <Image
                  style={styles.image}
                  source={Food}
                  />
                  <Image
                              style={styles.image3}
                              source={ratings_img}
                          />
                  <View style={{position:"absolute",
                      backgroundColor: 'rgba(0, 0, 0, .5)',
                      width: 30,
                      height:30,
                      borderWidth: 1.5,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: 'rgba(0, 0, 0, .5)',
                      alignSelf: 'flex-end',
                      marginTop:10,
                      padding:3,}}>
                          <Image
                              style={styles.image2}
                              source={heart_img}
                          />
                  </View>
                  <Text style={styles.text2}>
                      Kinalas
                  </Text>
              </TouchableOpacity>
          </View>
          
        )
      },{
        icon: (
          <View>
              <TouchableOpacity>
                  <Image
                  style={styles.image}
                  source={Food}
                  />
                  <Image
                              style={styles.image3}
                              source={ratings_img}
                          />
                  <View style={{position:"absolute",
                      backgroundColor: 'rgba(0, 0, 0, .5)',
                      width: 30,
                      height:30,
                      borderWidth: 1.5,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: 'rgba(0, 0, 0, .5)',
                      alignSelf: 'flex-end',
                      marginTop:10,
                      padding:3,}}>
                          <Image
                              style={styles.image2}
                              source={heart_img}
                          />
                  </View>
                  <Text style={styles.text2}>
                      Kinalas
                  </Text>
              </TouchableOpacity>
          </View>
          
        )
      },{
        icon: (
          <View>
              <TouchableOpacity>
                  <Image
                  style={styles.image}
                  source={Food}
                  />
                  <Image
                              style={styles.image3}
                              source={ratings_img}
                          />
                  <View style={{position:"absolute",
                      backgroundColor: 'rgba(0, 0, 0, .5)',
                      width: 30,
                      height:30,
                      borderWidth: 1.5,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: 'rgba(0, 0, 0, .5)',
                      alignSelf: 'flex-end',
                      marginTop:10,
                      padding:3,}}>
                          <Image
                              style={styles.image2}
                              source={heart_img}
                          />
                  </View>
                  <Text style={styles.text2}>
                      Kinalas
                  </Text>
              </TouchableOpacity>
          </View>
          
        )
      },{
        icon: (
          <View>
              <TouchableOpacity>
                  <Image
                  style={styles.image}
                  source={Food}
                  />
                  <Image
                              style={styles.image3}
                              source={ratings_img}
                          />
                  <View style={{position:"absolute",
                      backgroundColor: 'rgba(0, 0, 0, .5)',
                      width: 30,
                      height:30,
                      borderWidth: 1.5,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: 'rgba(0, 0, 0, .5)',
                      alignSelf: 'flex-end',
                      marginTop:10,
                      padding:3,}}>
                          <Image
                              style={styles.image2}
                              source={heart_img}
                          />
                  </View>
                  <Text style={styles.text2}>
                      Kinalas
                  </Text>
              </TouchableOpacity>
          </View>
          
        )
      },
      
  ];


const Suggestions = () => {
    const navigation = useNavigation();
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false,
    //     })
    // },[]);
  return (
    
    <SafeAreaView style ={{flex: 1}}>
        <View style={styles.containerMain}>
            <Text style={styles.text1}>
                We recomend:
            </Text>
            <View
                style={{
                    width:"80%",
                    padding:1,
                    backgroundColor: '#88DC3D',
                    borderBottomColor: '#88DC3D',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                />
            <View style={{height: '85%', padding:20, }}>
                <View style={styles.app}>
                    <FlatList
                        data={itemData}
                        numColumns={2}
                        renderItem={Item}
                        keyExtractor={(item) => item.alt}
                    />
                </View>

            </View>
        </View>
        {/* <View style={styles.bottomView}>
                    <BottomButtons/>
        </View> */}
    </SafeAreaView>
  )
}


export default Suggestions