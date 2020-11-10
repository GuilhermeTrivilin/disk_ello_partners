import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native'

import InitialModal from './components/InitialModal'
import MarketplaceLayout from '~/components/MarketplaceLayout'
import { categories } from './values/categories'

export default function MarketplaceHome({ navigation }) {

    const Button = ({ item }) => {

        return <TouchableOpacity
            onPress={() => navigation.navigate('MarketplaceProducts', {
                category: item.category
            })}
        >
            <Image source={item.image_path} style={styles.image} />
        </TouchableOpacity>
    }

    return (
        <MarketplaceLayout
            title='Nossos produtos'
            navigation={navigation}
        >
            <View style={styles.container}>

                <Text style={styles.text}>Escolha os produtos nas seções abaixo!</Text>

                <FlatList
                    data={categories}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Button item={item} />}
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