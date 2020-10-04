import React from 'react'
import { TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { colors } from '~/commons'

const RoundedButton = ({
    text,
    styleContainer,
    command,
    loading,
    backgroundColor = colors.green,
    fontColor = 'white',
}) => {

    const renderContent = loading ?
        <ActivityIndicator size="small" color="#FFF" />
        :
        <Text style={[styles.text, { color: fontColor }]}>
            {text}
        </Text>

    return <TouchableOpacity
        style={[styles.container, styleContainer, { backgroundColor }]}
        onPress={command}
    >
        {renderContent}
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