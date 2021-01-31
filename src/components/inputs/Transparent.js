import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'

import { TextInputMask } from 'react-native-masked-text'
import { colors } from '~/commons'

const TransparentInput = ({
    type,
    styleInput,
    styleLabel,
    styleContainer,
    isPassword,
    label,
    disabled,
    ...props
}) => {

    Entypo.loadFont()

    const [showPassword, setShowPassword] = useState(false)

    const InputComponent = type ? TextInputMask : TextInput

    const renderPasswordIcon = isPassword && <View style={styles.iconWrapper}>
        <Entypo
            name={`${showPassword ? "eye-with-line" : "eye"}`}
            size={20}
            color="gray"
            onPress={() => setShowPassword(!showPassword)}
        />
    </View>

    return (
        <View style={[styles.container, styleContainer, { opacity: disabled ? 0.6 : 1 }]}>
            <Text style={[styles.label, styleLabel]}>{label}</Text>
            <View style={styles.inputWrapper}>

                <InputComponent
                    type={type}
                    style={[styles.input, styleInput]}
                    editable={!disabled}
                    {...props}
                />
                {renderPasswordIcon}
            </View>
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
        borderRadius: 10,
        width: '100%'
    },
    label: {
        fontSize: 22,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrapper: {
        position: 'absolute',
        right: 10
    },
})

export default TransparentInput