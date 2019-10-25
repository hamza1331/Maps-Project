/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import React from 'react'
import {createAppContainer,createStackNavigator,createSwitchNavigator,createDrawerNavigator} from 'react-navigation'
import ListingScreen from '../components/listingscreen'
import profile from '../components/profile'
import MyProfile from '../components/MyProfile'
import reviews from '../components/reviews'
import firstScreen from '../components/map Creation/firstScreen'
import mapform from '../components/map Creation/mapform'
import MenuDrawer from '../components/MenuDrawerComp'
import { Dimensions } from "react-native";
const Width = Dimensions.get('window').width


const Stack = createStackNavigator({
    mapform:mapform,
    profile:profile,
    ListingScreen:ListingScreen,
    reviews,
    firstScreen,
    MyProfile
},{
    headerMode:'none',
    initialRouteName:'ListingScreen'
})
const drawerConfig={
  drawerWidth:Width*0.73,
  contentComponent:({navigation})=>{
      return <MenuDrawer navigation={navigation} /> 
  }
}
const drawerNavigator = createDrawerNavigator({
  HomeScreen:Stack
},drawerConfig)
export default createAppContainer(drawerNavigator)

