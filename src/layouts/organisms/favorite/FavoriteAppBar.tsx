import { StyleSheet, Text, View } from "react-native"
import React, { useRef } from 'react'
import RefreshButton from "../../atom/RefreshButton"
interface mainProps {
}
const FavoriteAppBar = (props: mainProps) => {

    return (
        <View style={styles.mainContainer}>
                <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center', }}>Favorite Flickr</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 60,
        elevation: 1,
        backgroundColor: '#212123',
        flexDirection: 'row',
        justifyContent: 'center',
    },
})

export default FavoriteAppBar;