import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import ProductCard from '~/components/cards/ProductCard'
import UserCredits from './components/UserCredits'
import CartCounter from '~/components/CartCounter'
import OrangeButton from '~/components/buttons/Orange'

import { removeFromCart, showCartItems } from '~/services/cart'
import { useIsFocused } from '@react-navigation/native'
import { showToast } from '~/helpers/showToast'

export default function MarketplaceCart({ navigation }) {

    const [cartListItems, setCartListItems] = useState([])
    const [useCredits, setUseCredits] = useState(false)

    const isFocused = useIsFocused()

    useEffect(() => { cartItems() }, [useIsFocused])

    const cartItems = async () => {
        const response = await showCartItems()
        response.success && setCartListItems(getOnlyProducts(response.data))
    }

    const getOnlyProducts = (list) => list.map(item => item.product)

    const handleRemoveItem = async (itemId) => {
        const response = await removeFromCart(itemId)

        if (response.success) {
            showToast("Removido com sucesso.")
            setCartListItems(removeItemFromList(itemId))
        } else {
            showToast("Ocorreu um problema, tente novamente mais tarde.")
        }
    }

    const removeItemFromList = (selectedId) => cartListItems.filter(({ id }) => id !== selectedId)

    const calculateTotal = () => {
        if (cartListItems.length === 0) return 0

        let valotTotal = 0
        cartListItems.forEach(item => { valotTotal = valotTotal + item.price })
        return valotTotal
    }

    const renderFlatListFooter = <View style={{ marginBottom: 10 }} >
        <CartCounter quantity={cartListItems.length} totalValue={calculateTotal()} />
        {/* <OrangeButton
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
    /> */}
        <OrangeButton
            text='PAGAR'
            style={styles.buttons}
            command={() => navigation.navigate("MarketplaceProductPayment", { totalValue: calculateTotal() })}
        />
    </View>

    return (
        <MarketplaceLayout
            title='Carrinho de compras'
            navigation={navigation}
            hasGoBack={false}
        >
            <View style={styles.container}>
                <FlatList
                    data={cartListItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ProductCard
                        item={item}
                        buttonText='DETALHES'
                        buttonCommand={() => { }}
                        handleRemoveItem={handleRemoveItem}
                    />}
                    ListFooterComponent={renderFlatListFooter}
                />
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
        marginVertical: 15,
        height: 50
    }
})