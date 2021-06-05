import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'
interface mainProps{
    clickLike: Function,
    like: boolean
}
const LikeButton = (props: mainProps) => {
    const onPress = ()=>props.clickLike()
    const icon = props.like ? 'heart' : 'hearto'
    const iconColor = props.like ? 'red' : 'white'
    return (
        <View
            style={styles.mainContainer}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                    <Icon name={icon} color={iconColor} style={styles.icon} size={30}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: { justifyContent: 'center', flex:1 },
    icon:{alignSelf:'flex-end'}
})

export default LikeButton;