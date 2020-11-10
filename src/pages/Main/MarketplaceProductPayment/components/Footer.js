import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import NormalButton from '~/components/buttons/Normal'
import MyWallet from './MyWallet'

import { colors, shadow } from '~/commons'
import { formatBRL } from '~/helpers/formatCurrency'

export const Footer = ({ 
    totalValue,
    handleConfirmButton,
    loading,
    toggleUseCredits
 }) => {

    return (
        <View style={[styles.container, shadow]}>

            <MyWallet toggleUseCredits={toggleUseCredits} />

            <Text style={styles.bold}>{formatBRL(totalValue)} (valor do pedido)</Text>

            {/* <NormalButton
                text='COLOCAR NO CARRINHO E CONTINUAR COMPRANDO'
                backgroundColor={colors.green}
                style={styles.button}
                textStyle={{ fontSize: 13 }}
            /> */}

            <NormalButton
                text='CONFIRMAR E FINALIZAR PEDIDO'
                backgroundColor={colors.green}
                style={styles.button}
                textStyle={{ fontSize: 16 }}
                command={handleConfirmButton}
                loading={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 20
    },
    button: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 10
    },
    bold: {
        fontWeight: 'bold',
        alignSelf: 'center'
    },
})

export default Footer