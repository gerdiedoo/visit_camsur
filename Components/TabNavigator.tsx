import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/Home';
import GameScreen from '../Screens/Game';
import TourScreen from '../Screens/Tour';
import FoodScreen from '../Screens/Food';
import StayScreen from '../Screens/Stay';
import FavoriteScreen from '../Screens/Favorite';
import SuggestionsScreen from '../Screens/Suggestions';
const Tab =  createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ 
        tabBarShowLabel: false,
        tabBarStyle: {
          // borderTopWidth: 0,
          // borderRadius:34,
          // backgroundColor:'lightgray',
          // marginLeft: 10,
          // marginRight: 10,
          // marginBottom: 10,
          elevation: 0,
          height: 60
        }
      }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View  >
                <Image
                  source={require('../assets/home.png')}
                  resizeMode="contain"
                  style={styles.tinyLogo} />
              </View>
            ),
          }}
          />
        {/* <Tab.Screen name="Favorite" component={FavoriteScreen} /> */}
        {/* <Tab.Screen name="SignIn" component={SignInScreen} /> */}
        <Tab.Screen 
          name="Game" 
          component={GameScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View  >
                <Image
                  source={require('../assets/Gamehover.png')}
                  resizeMode="contain"
                  style={styles.tinyLogo} />
              </View>
            ),
          }}
          />
        <Tab.Screen 
          name="Tour" 
          component={TourScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View  >
                <Image
                  source={require('../assets/Tour.png')}
                  resizeMode="contain"
                  style={styles.tinyLogo} />
              </View>
            ),
          }}
          />
        <Tab.Screen 
          name="Food" 
          component={FoodScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View  >
                <Image
                  source={require('../assets/Food.png')}
                  resizeMode="contain"
                  style={styles.tinyLogo} />
              </View>
            ),
          }}
          />
        <Tab.Screen 
          name="Stay" 
          component={StayScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View  >
                <Image
                  source={require('../assets/Accomodations.png')}
                  resizeMode="contain"
                  style={styles.tinyLogo} />
              </View>
            ),
          }}
          />
          <Tab.Screen 
          name="Favorites" 
          component={FavoriteScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View  >
              </View>
            ),
            tabBarItemStyle: {
              maxWidth: 0,
              maxHeight:0,
            },
          }}
          />
          <Tab.Screen 
          name="Suggestion" 
          component={SuggestionsScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View  >
              </View>
            ),
            tabBarItemStyle: {
              maxWidth: 0,
              maxHeight:0,
            },
          }}
          />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 30,
    height: 30,
  
  }
});

export default TabNavigator;
