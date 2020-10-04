import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { colors } from '~/commons'

const Button = ({ icon, text, command }) => {
    return <TouchableOpacity
        style={styles.container}
        onPress={command}
    >
        {icon}
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.orange,
        padding: 10,
        width: '90%',
        borderRadius: 10,
        marginVertical: 5,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    text: {
        fontWeight: 'bold',
        color: colors.orange,
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
})

export default Button