import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import Search from "react-native-search-box"

interface mainProps {
    title: string,
    onSearch?: Function
}
const AppBar2 = (props: mainProps) => {

    // Important: You must return a Promise
    const onSearch = async (searchText: string) => {
        return await new Promise((resolve, reject) => {
            if (props.onSearch) {
                props.onSearch(searchText)
                resolve(true);
            }
        });
    }
    return (
        <View>
            <View style={styles.mainContainer}>
                <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center', }}>{props.title}</Text>
            </View>
            {props.onSearch && <Search
                onSearch={onSearch}
                backgroundColor="#212123"
            />}
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