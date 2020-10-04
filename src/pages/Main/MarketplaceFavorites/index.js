import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import ProductCard from '~/components/cards/ProductCard'

const TEMP_PRODUCT = [
    {
        name: 'Forever Liss - Máscara de Barbosa Hidratação Profunda 950g',
        image: { uri: 'https://www.mukiranabeauty.com.br/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/o/forever-liss-desmaia-cabelo-mascara-anti-volume-e-frizz-950g.jpg' },
        price: 19.99
    }
]

export default function MarketplaceFavorites({ navigation }) {


    return (
        <MarketplaceLayout
            title='Produtos do coração'
            navigation={navigation}
            hasGoBack={false}
        >
            <View style={styles.container}>
                <FlatList
                    data={TEMP_PRODUCT}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ProductCard
                        item={item}
                        buttonText='RETIRAR'
                        buttonCommand={() => { }}
                    />}
                />
            </View>
        </MarketplaceLayout>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})