import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Divider from '~/components/Divider'
import RoundedInput from '~/components/inputs/Rounded'

import { shadow } from '~/commons'

export const PaymentInfo = ({
    card_number,
    card_holder_name,
    card_expiration_date,
    card_cvv,
    setCard_number,
    setCard_holder_name,
    setCard_expiration_date,
    setCard_cvv,
}) => {

    AntDesign.loadFont()

    return (
        <View style={[styles.container, shadow]}>
            <View style={styles.header}>
                <AntDesign
                    name='infocirlce'
                    size={22}
                />
                <Text style={styles.text}>Dados de pagamento</Text>
            </View>

            <Divider />

            <View style={styles.inputWrapper}>
                <RoundedInput
                    label='Número do cartão'
                    type={'credit-card'}
                    value={card_number}
                    onChangeText={setCard_number}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputWrapper}>
                <RoundedInput
                    label='Nome do proprietário do cartão'
                    value={card_holder_name}
                    onChangeText={setCard_holder_name}
                />
            </View>

            <View style={styles.inputWrapper}>
                <RoundedInput
                    label='Data de validade'
                    type='datetime'
                    options={{ format: 'DD/MM' }}
                    value={card_expiration_date}
                    onChangeText={setCard_expiration_date}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputWrapper}>
                <RoundedInput
                    label='CVV'
                    value={card_cvv}
                    onChangeText={setCard_cvv}
                    maxLength={3}
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '90%',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 15
    },
    header: {
        flexDirection: 'row'
    },
    text: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15
    },
    inputWrapper: {
        width: '95%'
    }
})

export default PaymentInfo