import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from "react-native"
import FeedType from "../../config/types/domain/FeedType"
import publicFeedsService from "../../services/publicFeedsService"
import HomeAppBar from "../organisms/home/HomeAppBar"
import Feeds from "../organisms/Feeds"

interface mainProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}
const Home = (props: mainProps) => {

  const [feeds, setFeeds] = useState([])
  const getFeeds = async (tags: string = "") => {
    const params = { tags }
    const res = await publicFeedsService.list(params)
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
    <View style={styles.mainContainer}>
      <HomeAppBar onRefresh={getFeeds} onSearch={getFeeds}></HomeAppBar>
      <Feeds
        feeds={feeds}
        onClickFeed={toFeedDetail}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  }
});
export default Home;