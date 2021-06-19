import React from 'react'
import { Fragment } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { FlatGrid } from "react-native-super-grid"
import FeedType from "../../config/types/domain/FeedType"
import HomeAppBar from "./home/HomeAppBar"

interface mainProps {
  feeds: FeedType[];
  onClickFeed: Function;
}
const Feeds = (props: mainProps) => {


  return (
    <Fragment>
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
    </Fragment>
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