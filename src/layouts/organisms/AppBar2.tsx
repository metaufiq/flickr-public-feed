import { StyleSheet, Text, View } from "react-native"
import React, { useRef } from 'react'
import RefreshButton from "../atom/RefreshButton"
interface mainProps {
    title: string
}
const AppBar2 = (props: mainProps) => {

    return (
        <View style={styles.mainContainer}>
                <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center', }}>{props.title}</Text>
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

export default AppBar2;