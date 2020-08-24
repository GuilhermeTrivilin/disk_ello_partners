import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

import { colors } from '~/commons'
import { TextInputMask } from 'react-native-masked-text'

const RoundedInput = ({ hasMask, label, style, disabled, ...props }) => {

    const renderLabel = label && <Text style={styles.label}>{label}</Text>

    const renderInput = hasMask ?
        <TextInputMask
            style={styles.input}
            placeholderTextColor={colors.gray}
            {...props}
        />
        :
        <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray}
        {...props}
    />

    return (
        <View style={[style, { opacity: disabled ? 0.5 : 1 }]}>

            {renderLabel}
            {renderInput}

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#e1e1e1',
        fontSize: 14,
        color: colors.gray,
        width: '100%',
        padding: 5,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 5
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 5
    }
})

export default RoundedInput