import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native'

import InitialModal from './components/InitialModal'
import MarketplaceLayout from '~/components/MarketplaceLayout'

const path = [
    require('~/assets/marketplace/app_credits.png'),
    require('~/assets/marketplace/plans.png'),
    require('~/assets/marketplace/hair_stylist.png'),
    require('~/assets/marketplace/manicure.png'),
    require('~/assets/marketplace/appliques.png'),
    require('~/assets/marketplace/braids.png'),
    require('~/assets/marketplace/podiatrist.png'),
    require('~/assets/marketplace/eyebrow.png'),
    require('~/assets/marketplace/aesthetic.png'),
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
                    data={path}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <TouchableOpacity
                        onPress={() => navigation.navigate('MarketplaceProducts')}
                    >
                        <Image source={item} style={styles.image} />
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