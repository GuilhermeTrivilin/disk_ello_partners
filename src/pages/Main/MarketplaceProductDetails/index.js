import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import RenderStars from '~/components/RenderStars'
import ActionCard from './components/ActionCard'
import Button from './components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { colors } from '~/commons'
import AvaliationModal from './components/AvaliationModal'

export default function MarketplaceProductDetails({ navigation, route }) {

    const {
        name,
        image,
        price,
        stars,
        product_info
    } = route.params.item

    const [amount, setAmount] = useState(0)
    const [avaliationModal, setAvaliationModal] = useState(false)

    FontAwesome.loadFont()

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

                <Image source={image} style={styles.image} />

                <View style={styles.starsView}>
                    <Text style={styles.bold}>NOTA DO PRODUTO: </Text>
                    <RenderStars stars_length={stars} />
                </View>

                <ActionCard
                    amount={amount}
                    setAmount={setAmount}
                    price={price}
                />

                <Text style={styles.bold}>INFORMAÇÕES DO PRODUTO:</Text>
                <Text style={styles.text}>{product_info}</Text>

                <Button
                    icon={<FontAwesome name='comment' size={25} color={colors.orange} />}
                    text='COMENTÁRIOS DO PRODUTO'
                    command={() => navigation.navigate('MarketplaceProductsComments')}
                />
                <Button
                    icon={<FontAwesome name='edit' size={25} color={colors.orange} />}
                    text='AVALIE O PRODUTO'
                    command={() => setAvaliationModal(true)}
                />
            </ScrollView>

            <AvaliationModal
                visible={avaliationModal}
                closeModal={() => setAvaliationModal(false)}
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