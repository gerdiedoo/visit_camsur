import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, StyleSheet } from 'react-native'

import FavoriteScreen from '../Screens/Favorite';
import SuggestionsScreen from '../Screens/Suggestions';
import ProfileScreen from '../Screens/Drawer/Profile';
import SettingsScreen from '../Screens/Drawer/Settings';
import LeaderboardScreen from '../Screens/Drawer/Leaderboard';
import HelpScreen from '../Screens/Drawer/Help';
import MapScreen from '../Screens/Drawer/Map';
import AboutScreen from '../Screens/Drawer/About';
import ShareScreen from '../Screens/Drawer/Share';
import TabNavigator from './TabNavigator';
import CustomDrawer from './side_settings/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator drawerContent = {props => <CustomDrawer {...props} /> } screenOptions={{headerShown: false}}>
        <Drawer.Screen 
            name='HomeScreen' 
            component={TabNavigator} 
            options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/home.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
                // drawerItemStyle: { height: 0 }
            }}    
            />
        <Drawer.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/home.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
                drawerItemStyle: { height: 0 }
            }}  
          />
        <Drawer.Screen 
          name='Leaderboard' 
          component={LeaderboardScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/leaderboard.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
            }}  
          />
        <Drawer.Screen 
          name='Settings' 
          component={SettingsScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/settings.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
            }}  
          />
        <Drawer.Screen 
          name='Favorite' 
          component={FavoriteScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/favorite.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
            }}  
          />
            {/* for the suggestion in favorites */}
            <Drawer.Screen 
          name='Suggestion' 
          component={SuggestionsScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/home.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
                drawerItemStyle: { height: 0 }
            }}  
          />
        <Drawer.Screen 
          name='About' 
          component={AboutScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/about.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
            }}  
          />
        <Drawer.Screen 
          name='Map' 
          component={MapScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/map.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
            }}  
          />
        <Drawer.Screen 
          name='Help' 
          component={HelpScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/help.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
            }}  
          /> 
        <Drawer.Screen 
          name='Share' 
          component={ShareScreen} 
          options={{
                drawerIcon: ({ focused }) => (
                    <View style={focused}>
                        <Image
                        source={require('../assets/share.png')}
                        resizeMode="contain"
                        style={styles.tinyLogo} />
                    </View>
                ),
            }}  
          />
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
      width: 25,
      height: 25,
    
    }
});

export default DrawerNavigator;
