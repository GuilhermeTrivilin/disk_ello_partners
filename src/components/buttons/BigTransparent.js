import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '~/commons'

const TransparentButton = ({ text, style, command, arrowIcon = true }) => {

    AntDesign.loadFont()

    const renderIcon = arrowIcon && <AntDesign
        name='caretright'
        size={25}
        color={colors.green}
    />

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={command}
        >
            <Text style={styles.text}>{text}</Text>
            {renderIcon}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '65%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: colors.green,
        marginVertical: 10
    },
    text: {
        fontWeight: 'bold',
        color: colors.green,
        fontSize: 25
    }
})

export default TransparentButton