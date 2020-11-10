import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { colors, shadow } from '~/commons'

export const QuantitySelector = ({
    clientsQuantity, 
    setClientsQuantity
}) => {

    AntDesign.loadFont()
    Fontisto.loadFont()

    const changeQuantity = (newValue) => {
        if(!validateQuantity(newValue)) return
        setClientsQuantity(newValue)
    }

    const validateQuantity = (newValue) => newValue >= 1

    return (
        <View style={[styles.container, shadow]}>
            <Fontisto
                name='persons'
                size={22}
            />

            <Text style={styles.text}>Quantidade de clientes</Text>

            <AntDesign
                name='plus'
                size={15}
                color={colors.green}
                onPress={() => changeQuantity(clientsQuantity + 1)}
            />

            <Text style={styles.quantity}>{clientsQuantity}</Text>

            <AntDesign
                name='minus'
                size={15}
                color={colors.green}
                onPress={() => changeQuantity(clientsQuantity - 1)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '90%',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 15
    },
    text: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15
    },
    quantity: {
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
})

export default QuantitySelector