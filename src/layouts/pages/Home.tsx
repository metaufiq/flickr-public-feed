import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import React, { useEffect, useState } from 'react'
import { StyleSheet } from "react-native"
import FeedType from "../../config/types/domain/FeedType"
import publicFeedsService from "../../services/publicFeedsService"
import Feeds from "../templates/Feeds"

interface mainProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}
const Home = (props: mainProps) => {

  const [feeds, setFeeds] = useState([])
  const getFeeds = async (tags: string = "") => {
    const params = {tags}
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
    <Feeds
      feeds={feeds}
      getFeeds={getFeeds}
      onClickFeed={toFeedDetail}
    />
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