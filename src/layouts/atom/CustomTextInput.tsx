import React,{ useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";


interface mainProps extends TextInputProps{
    title?: string,
}
const CustomTextInput = (props: mainProps)=>{

    const [input, setInput] = useState(props.value)

    const onChangeText = (input:string)=>{
        setInput(input)
        props.onChangeText!(input)
    }
    return (
        <View style={styles.mainContainer}>
            { props.title && <Text style={styles.title}>{props.title}</Text>}
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={input}
                keyboardType={props.keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingVertical:10
    },
    title:{
        marginBottom:5
    },
    input:{
        height: 40,
        borderWidth: 1,
        borderColor: '#D9D5DC',
    }
})

export default CustomTextInput