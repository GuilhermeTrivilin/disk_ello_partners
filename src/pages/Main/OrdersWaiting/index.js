import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import Header from '~/components/Header'
import OrderCard from '~/components/cards/OrderCard'

import { showToast } from '~/helpers/showToast'
import { acceptOrder, getWaitingOrders, rejectOrder } from '~/services/order'

export default function OrdersWaiting({ navigation, route }) {

    const [waitingOrdersList, setWaitingOrdersList] = useState([])

    useEffect(() => { orders() }, [])

    const orders = async () => {
        const response = await getWaitingOrders()
        setWaitingOrdersList(response.filter(item => item.id == 43))
    }

    const handleAcceptOrder = async (order_id) => {
        const response = await acceptOrder(order_id)

        if (!response || response?.errors) return showToast("Houve um erro ao completar sua solicitação.")

        if (response) {
            changeStatus(order_id)
            showToast("Serviço aceito com sucesso.")
        }
    }

    const handleRejectOrder = async (order_id) => {
        const response = await rejectOrder(order_id)

        if (!response || response?.errors) return showToast("Houve um erro ao completar sua solicitação.")

        if (response) {
            removeFromList(order_id)
            showToast("Serviço rejeitado com sucesso.")
        }
    }

    const changeStatus = (order_id) => {
        const newList = waitingOrdersList.map(item => {
            if (item.id === order_id) {
                return { ...item, status: "accepted" }
            } else {
                return item
            }
        })

        setWaitingOrdersList(newList)
    }

    const removeFromList = (order_id) => {
        const newList = waitingOrdersList.filter(item => item.id !== order_id)

        setWaitingOrdersList(newList)
    }

    const renderContent = <View style={styles.container}>
        <FlatList
            data={waitingOrdersList}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={<Header
                route={route}
                title="Pedidos aguardando"
                navigation={navigation}
            />}
            renderItem={({ item }) => <OrderCard
                order={item}
                handleAcceptOrder={handleAcceptOrder}
                handleRejectOrder={handleRejectOrder}
            />}
        />
    </View>

    return <>


        {renderContent}
    </>
}

const styles = StyleSheet.create({
    container: {

    }
})