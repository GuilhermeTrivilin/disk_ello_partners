import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

const TransparentInput = ({ type, styleInput, styleLabel, styleContainer, label, ...props }) => {

    const renderInput = !type ?
        <TextInput
            style={[styles.input, styleInput]}
            {...props}
        />
        :
        <TextInputMask
            type={type}
            style={[styles.input, styleInput]}
            {...props}
        />

    return (
        <View style={[styles.container, styleContainer]}>
            <Text style={[styles.label, styleLabel]}>{label}</Text>

            {renderInput}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '80%',
        marginBottom: 15,
        backgroundColor: 'transparent'
    },
    input: {
        padding: 0,
        borderBottomWidth: 3,
        borderColor: '#707070',
        fontSize: 18,
    },
    label: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20
    }
})

export default TransparentInput