import React from 'react'
import { View, Text as RNText, StyleSheet } from 'react-native'

import { formatBRL } from '~/components/helpers/formatCurrency'

const CardTable = ({ status, client, service, address, value, date}) => {

    const Text = ({ children }) => <RNText
        numberOfLines={1}
        ellipsizeMode='tail'
        style={styles.text}
    >
        {children}
    </RNText>


    return <View style={styles.infosWrapper}>
        <View style={styles}>
            <RNText style={styles.label}>Cliente</RNText>
            <RNText style={styles.label}>Serviço</RNText>
            <RNText style={styles.label}>Endereço</RNText>
            <RNText style={styles.label}>Data</RNText>
            <RNText style={styles.label}>Valor</RNText>
        </View>

        <View style={styles.verticalDivider} />

        <View>
            <Text>{client}</Text>
            <Text>{service}</Text>
            <Text>{address}</Text>
            <Text>{status === 'finished' ? date : 'Em andamento'}</Text>
            <Text>{formatBRL(value || 0)}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    infosWrapper: {
        flexDirection: 'row',
        marginBottom: 20
    },
    text: {
        lineHeight: 25,
        width: '100%'
    },
    verticalDivider: {
        width: 1,
        height: '100%',
        backgroundColor: 'gray',
        marginHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        lineHeight: 25
    },
})


export default CardTable