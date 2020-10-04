import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'
import { colors } from '~/commons'

const TransparentInput = ({
    type,
    styleInput,
    styleLabel,
    styleContainer,
    label,
    disabled,
    ...props
}) => {

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
        <View style={[styles.container, styleContainer, { opacity: disabled ? 0.5 : 1 }]}>
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
        padding: 5,
        borderWidth: 1,
        borderColor: colors.green,
        fontSize: 18,
        borderRadius: 10
    },
    label: {
        fontSize: 22,
    }
})

export default TransparentInput