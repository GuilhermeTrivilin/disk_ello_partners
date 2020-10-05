import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '~/commons'

const TransparentButton = ({ text, style, command, loading, arrowIcon = true }) => {

    AntDesign.loadFont()

    const renderIcon = arrowIcon && <AntDesign
        name='caretright'
        size={25}
        color={colors.green}
    />

    const renderContent = loading ?
        <ActivityIndicator size="large" color={colors.green} />
        :
        <>
            <Text style={styles.text}>{text}</Text>
            {renderIcon}
        </>

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={command}
        >
            {renderContent}
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