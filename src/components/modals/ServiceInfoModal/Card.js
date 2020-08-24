import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { shadow } from '~/commons'
import { formatBRL } from '~/components/helpers/formatCurrency'

const Card = ({ periodLabel, attendances, value }) => {

    return <View style={[styles.container, shadow]}>

        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{periodLabel}</Text>
            <View style={styles.verticalDivider} />
        </View>

        <View style={styles.infosWrapper}>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoTitle}>Atendimentos</Text>
                <Text>{attendances}</Text>
            </View>

            <View style={styles.infoWrapper}>
                <Text style={styles.infoTitle}>Ganhos</Text>
                <Text>{formatBRL(value || 0)}</Text>
            </View>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginVertical: 20,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        paddingVertical: 20
    },
    title: {
        fontSize: 20,
    },
    infosWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1
    },
    verticalDivider: {
        width: 1,
        backgroundColor: 'gray',
        height: '95%',
        marginHorizontal: 15
    },
    infoWrapper: {
        alignItems: 'center'
    },
    infoTitle: {
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 16
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Card