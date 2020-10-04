import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import RequestCard from './components/RequestCard'
import HelpButton from './components/HelpButton'

const TEMP_ITEMS = [
    {
        date: '24/06/2020',
        totalValue: 20,
        products: [
            {
                name: 'Forever Liss - Máscara de Barbosa Hidratação Profunda 950g',
                image: { uri: 'https://www.mukiranabeauty.com.br/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/o/forever-liss-desmaia-cabelo-mascara-anti-volume-e-frizz-950g.jpg' },
                price: 19.99
            }
        ]
    }
]

export default function MarketplaceHistory({ navigation }) {

    return (
        <MarketplaceLayout
            title='Histórico e Ajuda'
            navigation={navigation}
            hasGoBack={false}
        >
            <View style={styles.container}>
                <FlatList 
                    data={TEMP_ITEMS}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <RequestCard item={item} navigation={navigation} />}
                    ListFooterComponent={<HelpButton />}
                />
            </View>
        </MarketplaceLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})