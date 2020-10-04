import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const OrangeButton = ({ text, command, style, fontSize = 18 }) => {
    return <TouchableOpacity
        onPress={command}
        style={[styles.container, style]}
    >
        <Text style={[styles.text, {fontSize}]}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#F43820',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 40
    },
    text: {
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default OrangeButton