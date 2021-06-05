import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from 'react';
import FeedType from "../../config/types/domain/FeedType";
import WebView from "react-native-webview";
import BottomButtonCard from "../molecules/BottomButtonCard";

interface mainProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<Record<any, { feed: FeedType }>, any>;
}
const FeedDetail = (props: mainProps) => {

  const { feed } = props.route.params
  const toHome = async () => {
    props.navigation.push('Home')
  }
  const toFlickrWebView = async () => {
    props.navigation.push('FlickrWebView', { link: feed.link })
  }
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
  const tags = getFormatedTags();
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={{ uri: feed.media.m }} style={[styles.imageContainer]}>
        <View style={styles.tagsContainer}>
          <Text style={styles.tags}>{tags}</Text>
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
    height: 250,
    justifyContent: 'flex-end',
    flex: 2
  },
  tagsContainer: { alignItems: 'flex-start', paddingVertical: 10, paddingHorizontal: 5, backgroundColor: 'black', opacity: 0.8, justifyContent: 'center' },
  tags: { color: 'white' },
  cardContainer: { flex: 1.5 },
  cardContent: { alignItems: 'center', paddingTop: 20, paddingHorizontal: 50, },
  ButtonContainer: { width: '100%', marginTop: 15, position: 'absolute', bottom: 0, paddingBottom: 10, paddingHorizontal: 5 }
});
export default FeedDetail;