import { StyleSheet, View } from "react-native"
import React from 'react'
import RefreshButton from "../../atom/RefreshButton"
interface mainProps{
    onRefresh: Function
}
const HomeAppBar = (props: mainProps) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerRight}>
                <RefreshButton onRefresh={props.onRefresh}></RefreshButton>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 60,
        elevation: 1,
        backgroundColor: 'black',
        flexDirection: 'column'
    },
    containerRight:{
        alignSelf:'flex-end'
    }
})

export default HomeAppBar;