import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import ProductCard from '~/components/cards/ProductCard'
import UserCredits from './components/UserCredits'
import CartCounter from '~/components/CartCounter'
import OrangeButton from '~/components/buttons/Orange'

const TEMP_PRODUCT = [
    {
        name: 'Forever Liss - Máscara de Barbosa Hidratação Profunda 950g',
        image: { uri: 'https://www.mukiranabeauty.com.br/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/f/o/forever-liss-desmaia-cabelo-mascara-anti-volume-e-frizz-950g.jpg' },
        price: 19.99
    }
]

export default function MarketplaceCart({ navigation }) {


    return (
        <MarketplaceLayout
            title='Carrinho de compras'
            navigation={navigation}
            hasGoBack={false}
        >
            <View style={styles.container}>

                <FlatList
                    data={TEMP_PRODUCT}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ProductCard
                        item={item}
                        buttonText='DETALHES'
                        buttonCommand={() => { }}
                    />}
                />

                <View>
                    <UserCredits />
                    <CartCounter quantity={1} totalValue={120} />
                    <OrangeButton
                        text='TERMINAR DE COMPRAR'
                        style={styles.buttons}
                    />
                    <OrangeButton
                        text='FORMAS DE PAGAMENTO'
                        style={styles.buttons}
                    />
                    <OrangeButton
                        text='ENDEREÇO'
                        style={styles.buttons}
                    />
                </View>

            </View>
        </MarketplaceLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    buttons: {
        width: '75%',
        marginVertical: 7
    }
})