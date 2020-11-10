import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import RenderStars from '~/components/RenderStars'
import ActionCard from './components/ActionCard'
import Button from './components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { colors } from '~/commons'
import AvaliationModal from './components/AvaliationModal'
import { avaliateProduct } from '~/services/products'
import { showToast } from '~/helpers/showToast'
import { addToCart } from '~/services/cart'
import { useGlobalState } from '~/states/ContextProvider'

export default function MarketplaceProductDetails({ navigation, route }) {

    const { user } = useGlobalState()

    const {
        name,
        price,
        rating,
        description,
        avatar: { url },
        id
    } = route.params.item

    const [amount, setAmount] = useState(0)
    const [avaliationModal, setAvaliationModal] = useState(false)

    FontAwesome.loadFont()

    const handleAvaliate = async (stars) => {
        await avaliateProduct({ product_id: id, value: stars })
        showToast("Avaliação feita com sucesso.")
    }

    const handleAddToCart = async () => {
        const response = await addToCart({
            quantity: amount,
            partner_cart_id: user.id,
            product_id: id,
        })

        response.success
            ? showToast("Adicionado ao carrinho com sucesso")
            : showToast("Houve um problema, tente mais tarde")
    }

    return (
        <MarketplaceLayout
            title='Nossos produtos'
            navigation={navigation}
        >
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>{name}</Text>

                <Image source={url} style={styles.image} />

                <View style={styles.starsView}>
                    <Text style={styles.bold}>NOTA DO PRODUTO: </Text>
                    <RenderStars stars_length={rating} />
                </View>

                <ActionCard
                    amount={amount}
                    setAmount={setAmount}
                    price={price}
                    handleAddToCart={handleAddToCart}
                />

                <Text style={styles.bold}>INFORMAÇÕES DO PRODUTO:</Text>
                <Text style={styles.text}>{description}</Text>

                {/* <Button
                    icon={<FontAwesome name='comment' size={25} color={colors.orange} />}
                    text='COMENTÁRIOS DO PRODUTO'
                    command={() => navigation.navigate('MarketplaceProductsComments')}
                /> */}

                <Button
                    icon={<FontAwesome name='edit' size={25} color={colors.orange} />}
                    text='AVALIE O PRODUTO'
                    command={() => setAvaliationModal(true)}
                />
            </ScrollView>

            <AvaliationModal
                visible={avaliationModal}
                closeModal={() => setAvaliationModal(false)}
                name={name}
                handleAvaliate={handleAvaliate}
            />
        </MarketplaceLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.orange,
        borderRadius: 10,
        alignSelf: 'center'
    },
    title: {
        textAlign: 'center',
        margin: 20,
        fontSize: 18
    },
    starsView: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 15,
        margin: 20
    },
    text: {
        fontSize: 14,
        lineHeight: 22,
        marginHorizontal: 20,
        marginVertical: 10
    }
})