import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import { Title } from 'react-native-paper'
import Search from "react-native-search-box"
import RefreshButton from "../atom/RefreshButton"
interface mainProps {
    onRefresh?: Function,
    onSearch?: Function,
    title: string
}
const AppBar1 = (props: mainProps) => {

    // Important: You must return a Promise
    const onSearch = async (searchText:string) => {
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
                <View style={styles.containerLeft}>
                    <Title style={{color:'white'}}>{props.title}</Title>
                </View>
                {props.onRefresh && <View style={styles.containerRight}>
                    <RefreshButton onRefresh={props.onRefresh}></RefreshButton>
                </View>}
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
        flexDirection: 'row'
    },
    containerRight: {
        alignSelf: 'flex-end',
        flex: 1,
    },
    containerLeft: {
        alignSelf: 'flex-start',
        justifyContent:'center',
        height:'100%',
        flex: 3,
        paddingHorizontal: 15
    }
})

export default AppBar1;