import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { colors } from '~/commons'

const RoundedButton = ({
    text,
    styleContainer,
    command,
    backgroundColor = colors.green,
    fontColor = 'white'
}) => {

    return <TouchableOpacity
        style={[styles.container, styleContainer, { backgroundColor }]}
        onPress={command}
    >
        <Text style={[styles.text, { color: fontColor }]}>
            {text}
        </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold'
    }
})

export default RoundedButton