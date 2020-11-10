import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

const NormalButton = ({ loading, text, style, command, backgroundColor, textStyle }) => {

    const renderContent = loading
        ? <ActivityIndicator size="small" color="#FFF" />
        : <Text style={[styles.text, textStyle]}>{text}</Text>


    return (
        <TouchableOpacity
            style={[styles.container, style, { backgroundColor }]}
            onPress={command}
            disabled={loading}
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
        borderColor: '#d1d1d1'
    },
    text: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 25,
        textAlign: 'center'
    }
})

export default NormalButton