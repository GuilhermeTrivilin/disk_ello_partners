import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native'

import InitialModal from './components/InitialModal'
import MarketplaceLayout from '~/components/MarketplaceLayout'

const optionsList = [
    {
        category: "creditos",
        image: require('~/assets/marketplace/app_credits.png')
    },
    {
        category: "planos",
        image: require('~/assets/marketplace/plans.png')
    },
    {
        category: "cabelereiro",
        image: require('~/assets/marketplace/hair_stylist.png')
    },
    {
        category: "manicure",
        image: require('~/assets/marketplace/manicure.png')
    },
    {
        category: "aplique",
        image: require('~/assets/marketplace/appliques.png')
    },
    {
        category: "trancas",
        image: require('~/assets/marketplace/braids.png')
    },
    {
        category: "podologo",
        image: require('~/assets/marketplace/podiatrist.png')
    },
    {
        category: "sobranchela",
        image: require('~/assets/marketplace/eyebrow.png')
    },
    {
        category: "estetica",
        image: require('~/assets/marketplace/aesthetic.png')
    },
]

export default function MarketplaceHome({ navigation }) {

    return (
        <MarketplaceLayout
            title='Nossos produtos'
            navigation={navigation}
        >
            <View style={styles.container}>

                <Text style={styles.text}>Escolha os produtos nas seções abaixo!</Text>

                <FlatList
                    data={optionsList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <TouchableOpacity
                        onPress={() => navigation.navigate('MarketplaceProducts', { category: item.category })}
                    >
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>}
                    showsVerticalScrollIndicator={false}
                    style={{ marginBottom: 70 }}
                />
            </View>

            <InitialModal />
        </MarketplaceLayout>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 15
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        marginVertical: -15
    }
})