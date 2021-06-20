import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import React from 'react'
import { StyleSheet, View } from "react-native"
import { useQuery } from "react-query"
import FeedType from "../../config/types/domain/FeedType"
import favoriteFeedsService from "../../services/favoriteFeedsService"
import AppBar2 from "../organisms/AppBar2"
import Feeds from "../organisms/Feeds"

interface mainProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}
const Favorite = (props: mainProps) => {


  const FavoriteFeedsQuery = useQuery('favoriteFeeds', async () => await favoriteFeedsService.list())
  const toFeedDetail = async (feed: FeedType) => {
    props.navigation.push('FeedDetail', { feed })
  }
  return (
    <View style={styles.mainContainer}>
      <AppBar2 title="Favorite Feeds"/>
      <Feeds
        feeds={FavoriteFeedsQuery.data ?? []}
        onClickFeed={toFeedDetail}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 5,
    height: 250,
  },
});
export default Favorite;