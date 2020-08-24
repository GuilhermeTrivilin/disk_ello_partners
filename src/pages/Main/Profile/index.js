import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from '~/components/Header'
import BasicInfos from './components/BasicInfos'

export default function Profile({ navigation, route }) {

    return <>
        <Header
            navigation={navigation}
            route={route}
            title="Meu perfil"
        />

        <BasicInfos />
    </>
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10
    },
    doubleInput: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    saveButton: {
        width: '40%',
        marginTop: 20,
        alignSelf: 'flex-end'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})