import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import ProductCard from '~/components/cards/ProductCard'

const TEMP_PRODUCT = [
    {
        name: 'Forever Liss - Máscara de Barbosa Hidratação Profunda 950g',
        image: { uri: 'https://www.mukiranabeauty.com.br/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/o/forever-liss-desmaia-cabelo-mascara-anti-volume-e-frizz-950g.jpg' },
        price: 19.99,
        stars: 3,
        product_info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        name: 'Forever Liss - Máscara de Barbosa Hidratação Profunda 950g',
        image: { uri: 'https://www.mukiranabeauty.com.br/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/o/forever-liss-desmaia-cabelo-mascara-anti-volume-e-frizz-950g.jpg' },
        price: 19.99,
        stars: 3,
        product_info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        name: 'Forever Liss - Máscara de Barbosa Hidratação Profunda 950g',
        image: { uri: 'https://www.mukiranabeauty.com.br/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/o/forever-liss-desmaia-cabelo-mascara-anti-volume-e-frizz-950g.jpg' },
        price: 19.99,
        stars: 3,
        product_info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
]

export default function MarketplaceProducts({ navigation }) {

    return (
        <MarketplaceLayout
            title='Nossos produtos'
            navigation={navigation}
        >
            <View style={styles.container}>
                <FlatList
                    data={TEMP_PRODUCT}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ProductCard
                        item={item}
                        buttonText='DETALHES'
                        buttonCommand={() => navigation.navigate('MarketplaceProductDetails', { item })}
                    />}
                />
            </View>
        </MarketplaceLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})