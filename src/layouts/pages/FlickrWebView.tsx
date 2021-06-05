import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import React from 'react'
import BottomButtonCard from "../molecules/BottomButtonCard";
interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<Record<any, {link: string}>, any>;
}
const FlickrWebView = (props:mainProps)=>{


    const toBack = ()=>{
        props.navigation.goBack()
    }
 return(
     <View style={styles.mainContainer}>
         <WebView source={{uri: props.route.params.link}}/>
         <BottomButtonCard label="Back To App" onClick={toBack}/>
     </View>
 )
}

const styles = StyleSheet.create({
    mainContainer:{flex:1}
})

export default FlickrWebView;