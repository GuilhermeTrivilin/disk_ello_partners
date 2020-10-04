import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { shadow } from '~/commons'

const Header = ({ navigation, title, hasGoBack }) => {

    AntDesign.loadFont()

    const SearchButton = () => <TouchableOpacity
        onPress={() => { }}
        style={styles.searchButton}
    >
        <AntDesign
            name='search1'
            size={25}
            color='#000'
            onPress={() => {}}
            style={styles.searchIcon}
        />

        <Text style={styles.searchText}>Procurar...</Text>
    </TouchableOpacity>

    const renderGoBack = hasGoBack && <AntDesign
        name='caretleft'
        size={18}
        color='#fff'
        onPress={() => navigation.goBack()}
    />

    return (
        <LinearGradient
            colors={['#EC6136', '#FFBC36']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, shadow]}
        >
            <View style={styles.firstRow}>
                {renderGoBack}

                <Text style={styles.text}>{title}</Text>

                <AntDesign
                    name='shoppingcart'
                    size={35}
                    color='#fff'
                    onPress={() => navigation.navigate('MarketplaceCart')}
                />
            </View>

            <View style={styles.secondRow}>
                <SearchButton />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    secondRow: {
    },
    text: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 22,
    },
    searchButton: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingVertical: 8,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 5
    },
    searchIcon: {
        marginHorizontal: 20
    },
    searchText: {
        fontSize: 20,
    }
})

export default Header