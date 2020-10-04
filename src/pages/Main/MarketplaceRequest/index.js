import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import ProductCard from '~/components/cards/ProductCard'
import CartCounter from '~/components/CartCounter'
import OrangeButton from '~/components/buttons/Orange'

export default function MarketplaceRequest({ navigation, route }) {

    const { date, totalValue, products } = route.params.item

    return (
        <MarketplaceLayout
            title='Histórico e Ajuda'
            navigation={navigation}
        >
            <View style={styles.container}>

                <Text style={styles.text}>Compra Realizada: {date}</Text>
                <Text style={styles.text}>Em preparação - Em trânsito - Entregue</Text>

                <FlatList
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ProductCard item={item} hasButton={false} />}
                />

                <CartCounter quantity={products.length} totalValue={totalValue} />
            </View>

            <View style={styles.buttonsView}>
                <OrangeButton
                    text='COMPRAR NOVAMENTE'
                    style={styles.button}
                />
                <OrangeButton
                    text='TIVE UM PROBLEMA'
                    style={styles.button}
                />
                <OrangeButton
                    text='CANCELAR COMPRA'
                    style={styles.button}
                />
            </View>
        </MarketplaceLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        marginVertical: 5
    },
    buttonsView: {
        marginTop: 20
    },
    text: {
        marginVertical: 10,
        fontSize: 18,
        textAlign: 'center'
    }
})