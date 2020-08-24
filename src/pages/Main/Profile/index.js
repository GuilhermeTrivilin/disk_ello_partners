import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Header from '~/components/Header'

export default function Profile({navigation, route}){

    return <>
        <Header 
            navigation={navigation}
            route={route}
            title="Meu perfil"
        />
    </> 
}

const styles = StyleSheet.create({
    container: {

    }
})