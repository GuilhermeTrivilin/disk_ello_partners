import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from '~/components/Header'
import FinalizedOrderCard from './components/FinalizedOrderCard'
import RenderStars from '~/components/RenderStars'

import { shadow } from '~/commons'
import { useSafeArea } from 'react-native-safe-area-context'


export default function OrdersFinalized({ navigation, route }) {
    const insets = useSafeArea()

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

        <View style={[styles.footer, shadow, { paddingBottom: insets.bottom }]}>
            <Text style={styles.footerText}>Média nos atendimentos</Text>
            <View style={styles.verticalDivider} />
            <RenderStars stars_length={3} />
        </View>
    </>
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#FFF',
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    verticalDivider: {
        width: 1,
        height: '95%',
        backgroundColor: 'gray',
        marginHorizontal: 10
    },
    footerText: {
        fontWeight: 'bold',
        fontSize: 18
    }
})