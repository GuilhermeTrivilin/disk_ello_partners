import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import ProductCard from '~/components/cards/ProductCard'
import { getProducts } from '~/services/products'

export default function MarketplaceProducts({ navigation, route }) {

    const [productsList, setProductsList] = useState([])

    useEffect(() => { getCategoryProducts() }, [route])
    
    const getCategoryProducts = async() => {
        const response = await getProducts(route.params?.category)
        setProductsList(response)
    }

    return (
        <MarketplaceLayout
            title='Nossos produtos'
            navigation={navigation}
        >
            <View style={styles.container}>
                <FlatList
                    data={productsList}
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