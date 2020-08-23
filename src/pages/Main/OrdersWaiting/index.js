import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import Header from '~/components/Header'

export default function OrdersWaiting({navigation, route}){

    return <>
        <Header 
            route={route}
            title="Pedidos aguardando"
            navigation={navigation}
        />
    </>
}