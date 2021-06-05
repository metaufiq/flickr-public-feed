import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'
import React from 'react'
interface mainProps{
    onRefresh: Function
}
const RefreshButton = (props: mainProps) => {
    const onPress = ()=>props.onRefresh()
    return (
        <View
            style={styles.mainContainer}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                    <Icon name="refresh" color="white" style={styles.icon} size={30}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: { justifyContent: 'center', alignContent: 'center', flex:1, paddingHorizontal:20 },
    icon:{alignSelf:'center'}
})

export default RefreshButton;