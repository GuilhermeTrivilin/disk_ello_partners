import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import OrangeButton from '~/components/buttons/Orange'
import { shadow, colors } from '~/commons'

const ProductCard = ({ item, buttonText, buttonCommand, hasButton = true }) => {

    const { 
        price, 
        name, 
        avatar: { url } 
    } = item

    const formatPrice = (value) => {
        var value = value.toFixed(2).split('.');
        value[0] = value[0].split(/(?=(?:...)*$)/).join('.');
        return value.join(',');
    }

    const renderRemoveButton = hasButton && <OrangeButton text={buttonText} command={buttonCommand} />

    return <View style={[styles.container, shadow]}>
        <Image style={styles.image} source={url} />

        <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.secondRow}>
                <View>
                    <Text style={styles.sign}>R$</Text>
                    <Text style={styles.price}>{formatPrice(price)}</Text>
                </View>

                {renderRemoveButton}
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 25,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.orange,
        borderRadius: 10
    },
    name: {
        flex: 1,
        textAlign: 'center',
        lineHeight: 23,
        marginBottom: 20
    },
    secondRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    },
    price: {
        fontSize: 18
    },
    sign: {
        fontWeight: 'bold',
        fontSize: 30
    }
})

export default ProductCard