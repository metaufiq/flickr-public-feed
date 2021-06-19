import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import React from 'react'
import { StyleSheet } from "react-native"
import { useQuery } from "react-query"
import FeedType from "../../config/types/domain/FeedType"
import favoriteFeedsService from "../../services/favoriteFeedsService"
import Feeds from "../templates/Feeds"

interface mainProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}
const Favorite = (props: mainProps) => {

  
  const FavoriteFeedsQuery = useQuery('favoriteFeeds', async ()=> await favoriteFeedsService.list())
  const toFeedDetail = async (feed: FeedType) => {
    props.navigation.push('FeedDetail', { feed })
  }
  return (
    <Feeds
      feeds={FavoriteFeedsQuery.data ?? []}
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
export default Favorite;