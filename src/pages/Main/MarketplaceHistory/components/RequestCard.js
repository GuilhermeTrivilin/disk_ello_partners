import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

import OrangeButton from '~/components/buttons/Orange'
import { shadow, colors } from '~/commons'
import { formatBRL } from '~/helpers/formatCurrency'

const path = {
    request: require('~/assets/request.png')
}

const RequestCard = ({ item, navigation }) => {

    const { date, totalValue } = item

    return <View style={[styles.container, shadow]}>
        <Image source={path.request} style={styles.image} />

        <View style={styles.requestInfo}>
            <Text style={styles.title}>Compra</Text>
            <Text style={[styles.text, styles.bold]}>Data: {date}</Text>
            <Text style={styles.text}>
                <Text style={styles.bold}>TOTAL: </Text>
                <Text> {formatBRL(totalValue)}</Text>
            </Text>
        </View>

        <View style={styles.detailsButton}>
            <OrangeButton
                text='DETALHES'
                fontSize={10}
                command={() => navigation.navigate('MarketplaceRequest', { item })}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    requestInfo: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: colors.orange,
        fontWeight: 'bold',
        marginBottom: 5
    },
    text: {
        fontSize: 16,
    },
    bold: {
        fontWeight: 'bold'
    },
    detailsButton: {
        justifyContent: 'flex-end',
        height: '100%'
    }
})

export default RequestCard