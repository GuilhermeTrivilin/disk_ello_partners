import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '~/commons';

const CartCounter = ({ quantity, totalValue }) => {

    const formatPrice = (value) => {
        var value = value.toFixed(2).split('.');
        value[0] = value[0].split(/(?=(?:...)*$)/).join('.');
        return value.join(',');
    }

    return <View style={styles.container}>
        <View style={styles.quantityView}>
            <Text style={[styles.text, styles.bold]}>{quantity}</Text>
            <Text style={styles.text}>PRODUTO(S)</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.priceView}> 
            <Text style={styles.text}>TOTAL</Text>
            <Text style={[styles.text, styles.bold]}>R$</Text>
            <Text style={styles.text}>{formatPrice(totalValue)}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.orange,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        alignSelf: 'center'
    },
    divider: {
        width: 3,
        height: '80%',
        backgroundColor: colors.orange
    },
    quantityView: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 24
    },
    text: { 
        fontSize: 18,
        textAlign: 'left'
    }
})

export default CartCounter