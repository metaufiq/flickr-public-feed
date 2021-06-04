import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { useEffect, useState } from "react"
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { FlatGrid } from "react-native-super-grid"
import feedsService from "../../services/feedsService"
import React from 'react';

interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<any, any>;
}
const Home = (props: mainProps)=>{

    const [feeds, setFeeds] = useState([]) 
    const getFeeds = async ()=>{
     const res = await feedsService.publicPhotos({})
     if (res.isError) {
       return
     }
     setFeeds(res.items);
    }
    const toFeedDetail = async (feed: any) => {
      props.navigation.push('FeedDetail', {feed})
      
    }
    useEffect(()=>{
     getFeeds()
   },[])
    return(
        <View style={{flex:1}}>
        <FlatGrid
        itemDimension={150}
        data={feeds}
        style={styles.gridView}
        spacing={5}
        renderItem={({ item, index }: any) => (
          <TouchableOpacity onPress={()=>toFeedDetail(item)}>
            <View style={[styles.itemContainer]}>
                  <ImageBackground source={{uri: item?.media?.m}} style={styles.image}>
                  </ImageBackground>
            </View>
          </TouchableOpacity>
  
        )}
        />
       </View>
    )
}

const styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 10,
    },
    itemContainer: {
      borderRadius: 5,
      height: 250,
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
      resizeMode: "cover",
      padding: 10,
    }
  });
export default Home;