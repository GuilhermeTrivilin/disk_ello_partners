import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

import { colors } from '~/commons'

const RoundedInput = ({ label, style, ...props }) => {

    const renderLabel = label && <Text style={styles.label}>{label}</Text>

    return (
        <View>
            {renderLabel}
            <TextInput
                style={[styles.input, style]}
                placeholderTextColor={colors.gray}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
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