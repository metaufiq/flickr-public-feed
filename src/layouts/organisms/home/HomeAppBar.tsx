import { StyleSheet, Text, View } from "react-native"
import React, { useRef } from 'react'
import RefreshButton from "../../atom/RefreshButton"
import Search from "react-native-search-box"
interface mainProps {
    onRefresh: Function
    onSearch: Function
}
const HomeAppBar = (props: mainProps) => {

    // Important: You must return a Promise
    const onSearch = async (searchText:string) => {
        return await new Promise((resolve, reject) => {
            props.onSearch(searchText)
            resolve(true);
        });
    }
    return (
        <View>
            <View style={styles.mainContainer}>
                <View style={styles.containerLeft}>
                    <Text style={{color:'white', fontSize: 20}}>Flickr</Text>
                </View>
                <View style={styles.containerRight}>
                    <RefreshButton onRefresh={props.onRefresh}></RefreshButton>
                </View>
            </View>
            <Search
                onSearch={onSearch}
                backgroundColor="#212123"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 60,
        elevation: 1,
        backgroundColor: '#212123',
        flexDirection: 'row'
    },
    containerRight: {
        alignSelf: 'flex-end',
        flex: 1,
        paddingTop:5,
    },
    containerLeft: {
        alignSelf: 'flex-start',
        justifyContent:'center',
        height:'100%',
        flex: 3,
        paddingHorizontal: 15
    }
})

export default HomeAppBar;