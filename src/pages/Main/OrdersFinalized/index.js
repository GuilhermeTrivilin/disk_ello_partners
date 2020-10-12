import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import Header from '~/components/Header'
import RenderStars from '~/components/RenderStars'
import OrderCard from '~/components/cards/OrderCard'

import { shadow } from '~/commons'
import { useSafeArea } from 'react-native-safe-area-context'
import { getFinishedOrders } from '~/services/order'
import { useGlobalState } from '~/states/ContextProvider'


export default function OrdersFinalized({ navigation, route }) {
    const insets = useSafeArea()
    const { user } = useGlobalState()

    const [finishedOrdersList, setFinishedOrdersList] = useState([])

    useEffect(() => { orders() }, [])

    const orders = async () => {
        const response = await getFinishedOrders()
        setFinishedOrdersList(response)
    }

    const renderContent = <View style={styles.container}>
        <FlatList
            data={finishedOrdersList}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <OrderCard order={item} />}
            ListHeaderComponent={<Header
                route={route}
                title="Pedidos finalizados"
                navigation={navigation}
            />}
            ListFooterComponent={<View style={[styles.footer, shadow, { paddingBottom: insets.bottom }]}>
                <Text style={styles.footerText}>Média nos atendimentos</Text>
                <View style={styles.verticalDivider} />
                <RenderStars stars_length={user.rating || 0} />
            </View>}
        />
    </View>

    return <>


        {renderContent}


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