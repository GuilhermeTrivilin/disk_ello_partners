import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import Header from '~/components/Header'
import FinalizedOrderCard from './components/FinalizedOrderCard'

export default function OrdersFinalized({navigation, route}){

    return <>
        <Header 
            route={route}
            title="Pedidos finalizados"
            navigation={navigation}
        />

        <View style={styles.container}>
            <FinalizedOrderCard />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {

    }
})