/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect, useState } from 'react';
 import {
   ImageBackground,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import feedsService from './src/services/feedsService';

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const [feeds, setFeeds] = useState([]) 
   const getFeeds = async ()=>{
    const res = await feedsService.publicPhotos({})
    if (res.isError) {
      return
    }
    setFeeds(res.items);
   }
   useEffect(()=>{
    getFeeds()
  },[])
   return (
    <View style={{flex:1}}>
      <FlatGrid
      itemDimension={150}
      data={feeds}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      // spacing={20}
      renderItem={({ item, index }: any) => (

        
        <View style={[styles.itemContainer]}>
              <ImageBackground source={{uri: item?.media?.m}} style={styles.image}>
              </ImageBackground>
        </View>
      )}
      />
     </View>
   );
 };

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
 export default App;
