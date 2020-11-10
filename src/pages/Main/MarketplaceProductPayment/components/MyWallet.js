import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { CheckBox } from 'react-native-elements'
import { formatBRL } from '~/helpers/formatCurrency'
import { useGlobalState } from '~/states/ContextProvider'
import { colors } from '~/commons'

const MyWallet = ({ toggleUseCredits }) => {

    const { user } = useGlobalState()

    const [useWallet, setUseWallet] = useState(false)

    const handleUseWallet = () => {
        toggleUseCredits && toggleUseCredits()
        setUseWallet(!useWallet)
    }

    return <View
        style={styles.myWallet}
    >
        <CheckBox
            checked={useWallet}
            containerStyle={styles.checkBox}
            textStyle={styles.textCheckBox}
            checkedColor={colors.green}
            uncheckedColor={colors.green}
            onPress={handleUseWallet}
        />

        <Text style={styles.bold}>Meus créditos: </Text>
        <Text>{formatBRL(user.credits)}</Text>

    </View>
}

const styles = StyleSheet.create({
    myWallet: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.green,
        borderRadius: 10,
        marginBottom: 10
    },
    checkBox: {
        backgroundColor: '#FFF',
        borderWidth: 0
    },
    textCheckBox: {
        fontSize: 13,
        color: colors.blue,
        fontWeight: 'bold'
    },
})

export default MyWallet