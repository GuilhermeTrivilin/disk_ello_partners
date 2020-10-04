import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { shadow } from '~/commons'

const Footer = ({ navigation }) => {

    AntDesign.loadFont()
    FontAwesome.loadFont()

    return (
        <LinearGradient
            colors={['#EC6136', '#FFBC36']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, shadow]}
        >
            <FontAwesome
                name='home'
                size={45}
                color='#fff'
                onPress={() => navigation.navigate('MarketplaceHome')}
            />
            <AntDesign
                name='shoppingcart'
                size={35}
                color='#fff'
                onPress={() => navigation.navigate('MarketplaceCart')}
            />
            <AntDesign
                name='heart'
                size={35}
                color='#fff'
                onPress={() => navigation.navigate('MarketplaceFavorites')}
                />
            <FontAwesome
                name='gear'
                size={35}
                color='#fff'
                onPress={() => navigation.navigate('MarketplaceHistory')}
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 5
    },
})

export default Footer