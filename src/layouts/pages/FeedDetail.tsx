import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from 'react';

interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<Record<any, {feed: any}>, any>;
}
const FeedDetail = (props: mainProps)=>{

    const toHome = async () => {
      props.navigation.push('Home')      
    }

    return(
        <View style={{flex:1}}>
          <TouchableOpacity onPress={toHome}>
            <View style={[styles.itemContainer]}>
                <Text style={{color:'white'}}>This is Feed Detail, Press this to go to HomePage</Text>
            </View>
          </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
      borderRadius: 5,
      height: 250,
      backgroundColor:'blue'
    },
});
export default FeedDetail;