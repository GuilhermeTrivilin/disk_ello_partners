import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import Header from '~/components/Header'
import WaitingOrderCard from './components/FinalizedOrderCard'

export default function OrdersFinalized({navigation, route}){

    return <>
        <Header 
            route={route}
            title="Pedidos aguardando"
            navigation={navigation}
        />

        <View style={styles.container}>
            <WaitingOrderCard />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {

    }
})