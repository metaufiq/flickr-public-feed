import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground,  StyleSheet, Text, View } from "react-native"
import React, { useState } from 'react';
import FeedType from "../../config/types/domain/FeedType";
import BottomButtonCard from "../molecules/BottomButtonCard";
import LikeButton from "../atom/LikeButton";
import { useEffect } from "react";
import favoriteFeedsService from "../../services/favoriteFeedsService";

interface mainProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<Record<any, { feed: FeedType }>, any>;
}
const FeedDetail = (props: mainProps) => {

  const { feed } = props.route.params
  const [like, setLike] = useState(false);

  const toFlickrWebView = async () => {
    props.navigation.push('FlickrWebView', { link: feed.link })
  }
  const innit = async()=>{
    const res = await favoriteFeedsService.get(feed.link)
    if (res) {
      setLike(true)
    }
  }
  useEffect(()=>{
    innit()
  },[])


  const getFormatedTags = () => {
    let result = ''
    if (feed.tags === '') {
      result = 'no tags'
      return result
    }
    feed.tags.split(' ').forEach(tag => {
      result += `#${tag} `
    });
    return result
  }
  const onLikeFeed = async () => {
    if (!like) {
      await favoriteFeedsService.add(feed)  
    }else{
      await favoriteFeedsService.remove(feed.link)
    }
    setLike((like) => !like)
  }
  const tags = getFormatedTags();

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={{ uri: feed.media.m }} style={[styles.imageContainer]}>
        <View style={styles.tagsContainer}>
          <View style={styles.tagsLeftContainer}>
            <Text style={styles.tags}>{tags}</Text>
          </View>
          <View style={styles.tagsRightContainer}>
            <LikeButton clickLike={onLikeFeed} like={like}></LikeButton>

          </View>
        </View>
      </ImageBackground>
      <View style={styles.cardContainer}>

        <View style={styles.cardContent}>
          <Text style={{ fontSize: 30 }}>{feed.title}</Text>
          <Text style={{ fontSize: 10 }}>published by</Text>
          <Text style={{ fontSize: 10 }}>{feed.author}</Text>
        </View>
      </View>
      <BottomButtonCard label="Visit Flickr" onClick={toFlickrWebView} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: { flex: 6 },
  imageContainer: {
    justifyContent: 'flex-end',
    flex: 2
  },
  tagsContainer: { paddingVertical: 10, paddingHorizontal: 8, backgroundColor: 'black', opacity: 0.8, alignContent:'center', flexDirection: 'row', height:'25%' },
  tagsLeftContainer: { alignContent:'flex-start',justifyContent:'center', flex:2  },
  tagsRightContainer: {alignSelf:'flex-end', flex:1 , paddingRight: 20, paddingTop:5 },
  tags: { color: 'white',justifyContent:'center' },
  cardContainer: { flex: 1.5 },
  cardContent: { alignItems: 'center', paddingTop: 20, paddingHorizontal: 50, },
  ButtonContainer: { width: '100%', marginTop: 15, position: 'absolute', bottom: 0, paddingBottom: 10, paddingHorizontal: 5 }
});
export default FeedDetail;