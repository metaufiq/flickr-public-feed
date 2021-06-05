import { Button, StyleSheet, View } from "react-native"
import React from 'react'


interface mainProps{
    onClick : Function,
    label: string
}
const BottomButtonCard = (props: mainProps) => {

    const onPress = ()=>{
        props.onClick()
    }
    return (
        <View style={[styles.mainContainer]}>
            <Button
                title={props.label}
                onPress={onPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderTopWidth: 0.5,
        borderTopColor: '#D9D5DC',
        justifyContent:'center',
        alignContent:'center',
    }

})

export default BottomButtonCard;