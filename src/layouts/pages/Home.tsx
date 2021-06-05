import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { useEffect, useState } from "react"
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { FlatGrid } from "react-native-super-grid"
import feedsService from "../../services/feedsService"
import React from 'react';
import FeedType from "../../config/types/domain/FeedType"
import HomeAppBar from "../organisms/home/HomeAppBar"

interface mainProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}
const Home = (props: mainProps) => {

  const [feeds, setFeeds] = useState([])
  const getFeeds = async (tags: string = "") => {
    const params = {tags}
    const res = await feedsService.publicPhotos(params)
    if (res.isError) {
      return
    }

    setFeeds(res.items);
  }
  
  const toFeedDetail = async (feed: FeedType) => {
    props.navigation.push('FeedDetail', { feed })

  }
  useEffect(() => {
    getFeeds()
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <HomeAppBar onRefresh={getFeeds} onSearch={getFeeds}></HomeAppBar>
      <FlatGrid
        itemDimension={150}
        data={feeds}
        style={styles.gridView}
        spacing={5}
        renderItem={({ item, index }: { item: FeedType, index: number }) => (
          <TouchableOpacity onPress={() => toFeedDetail(item)}>
            <View style={[styles.itemContainer]}>
              <ImageBackground source={{ uri: item?.media?.m }} style={styles.image}>
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