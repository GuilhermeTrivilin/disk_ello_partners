import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import RoundedInput from '~/components/inputs/Rounded'

export const Date = ({
    date, 
    setDate, 
    time, 
    setTime
}) => {

    return (
        <View style={styles.container}>
            <RoundedInput
                label='Data'
                type='datetime'
                placeholder="Ex.: 01/01/2021"
                options={{ format: 'DD/MM/YYYY' }}
                value={date}
                onChangeText={setDate}
            />

            <RoundedInput
                label='Horário'
                type='datetime'
                placeholder='Ex.: 08:00'
                options={{ format: 'HH:mm' }}
                value={time}
                onChangeText={setTime}
            />

            <Text style={styles.smallText}>
                Você será notificado pela aba notificações quando o profissional aceitar seu agendamento.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    smallText: {
        fontSize: 13,
        textAlign: 'center',
        marginVertical: 5
    },
})

export default Date