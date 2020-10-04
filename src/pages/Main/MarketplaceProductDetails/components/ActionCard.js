import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import OrangeButton from '~/components/buttons/Orange'

import { shadow } from '~/commons'
import { formatBRL } from '~/helpers/formatCurrency'

const ActionCard = ({ price, amount, setAmount }) => {
    
    AntDesign.loadFont()

    const [favorited, setFavorited] = useState(false)

    useEffect(() => {
        amount < 0 ? setAmount(0) : false
    }, [amount])

    return <View style={[styles.container, shadow]}>
        <View style={styles.firstRow}>
            <Text style={styles.price}>{formatBRL(price)}</Text>

            <View style={styles.rowView}>
                <Text style={styles.text}>Adicionar aos favoritos</Text>
                <AntDesign
                    name={favorited ? 'heart' : 'hearto'}
                    size={25}
                    color='#FFBC37'
                    onPress={() => setFavorited(!favorited)}
                />
            </View>
        </View>

        <View style={styles.secondRow}>
            <OrangeButton
                text={`COLOCAR NO CARRINHO (${formatBRL(amount * price)})`}
                fontSize={13}
            />

            <AntDesign
                name='minus'
                size={25}
                color='#F43820'
                onPress={() => setAmount(amount - 1)}
            />
            <Text style={styles.amount}>{amount}</Text>
            <AntDesign
                name='plus'
                size={25}
                color='#F43820'
                onPress={() => setAmount(amount + 1)}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 20
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    secondRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 20
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 15
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default ActionCard