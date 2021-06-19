import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { FlatGrid } from "react-native-super-grid"
import FeedType from "../../config/types/domain/FeedType"
import HomeAppBar from "../organisms/home/HomeAppBar"

interface mainProps {
  feeds: FeedType[];
  getFeeds: Function;
  onClickFeed: Function;
}
const Feeds = (props: mainProps) => {


  

  useEffect(() => {
    props.getFeeds()
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <HomeAppBar onRefresh={props.getFeeds} onSearch={props.getFeeds}></HomeAppBar>
      <FlatGrid
        itemDimension={150}
        data={props.feeds}
        style={styles.gridView}
        spacing={5}
        renderItem={({ item, index }: { item: FeedType, index: number }) => (
          <TouchableOpacity onPress={() => props.onClickFeed(item)}>
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
export default Feeds;