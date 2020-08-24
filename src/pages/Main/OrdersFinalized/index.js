import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from '~/components/Header'
import FinalizedOrderCard from './components/FinalizedOrderCard'

export default function OrdersFinalized({ navigation, route }) {

    return <>
        <Header
            route={route}
            title="Pedidos finalizados"
            navigation={navigation}
        />

        <View style={styles.container}>
            <FinalizedOrderCard
                status="in_progress"
                client="Guilherme Trivilin"
                service="Cabelo e barba"
                address="Rua Marcos Antonio, Itapua, Vitória"
                value={150}
            />
            <FinalizedOrderCard
                status="finished"
                client="Claudio Disk Ello"
                service="Massagem"
                address="Rua Antonio Flavion, Marcilio, Cariacica"
                date='08/05/2020'
                value={100}
            />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {

    }
})