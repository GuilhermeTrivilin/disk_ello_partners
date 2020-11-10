import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { colors, shadow } from '~/commons'
import { CheckBox } from 'react-native-elements'
import { useGlobalState } from '~/states/ContextProvider'

const UserCredits = ({ useCredits, setUseCredits }) => {

    const { user } = useGlobalState()

    return <View
        style={styles.container}
    >
        <View style={styles.rowView}>
            <Text style={styles.bold}>Meus créditos: </Text>
            <Text>{user.credits}</Text>
        </View>

        <View style={styles.rowView}>
            <Text>Usar</Text>
            <CheckBox
                checked={useCredits}
                containerStyle={styles.checkBox}
                textStyle={styles.textCheckBox}
                checkedColor={colors.orange}
                uncheckedColor={colors.orange}
                onPress={() => setUseCredits(!useCredits)}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.orange,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    bold: {
        fontWeight: 'bold',
        alignSelf: 'center'
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
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default UserCredits