import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { shadow, colors } from '~/commons'
import AvaliationWrapper from './AvaliationWrapper'
import RoundedButton from '~/components/buttons/Rounded'
import { formatBRL } from '~/components/helpers/formatCurrency'

const FinalizedOrderCard = ({ 
    status,
    client,
    service,
    address,
    date,
    value
 }) => {

    const path = {
        logo: require("~/assets/logo-02.png")
    }

    const renderAvaliation = status === "finished" && <AvaliationWrapper />

    const renderProgressCircle = status === 'in_progress' && <View style={styles.progressCircle} />
    const renderFinishButton = status === "in_progress" && <RoundedButton
        text="FINALIZAR"
        styleContainer={{ width: '50%', alignSelf: 'center' }}
    />

    return <View style={[styles.container, shadow]}>
        <View style={styles.infosWrapper}>
            <View style={styles}>
                <Text style={styles.label}>Cliente</Text>
                <Text style={styles.label}>Serviço</Text>
                <Text style={styles.label}>Endereço</Text>
                <Text style={styles.label}>Data</Text>
                <Text style={styles.label}>Valor</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {client}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {service}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {address}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {status === 'finished' ? date : 'Em andamento'}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {formatBRL(value || 0)}
                </Text>
            </View>
        </View>

        {renderAvaliation}
        {renderFinishButton}
        {renderProgressCircle}

        <Image
            source={path.logo}
            style={styles.logo}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignSelf: 'center',
        width: '95%',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10
    },
    verticalDivider: {
        width: 1,
        height: '100%',
        backgroundColor: 'gray',
        marginHorizontal: 10
    },
    infosWrapper: {
        flexDirection: 'row',
        marginBottom: 20
    },
    label: {
        fontWeight: 'bold',
        lineHeight: 25
    },
    text: {
        lineHeight: 25,
        width: '100%'
    },
    logo: {
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    progressCircle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: colors.green,
        position: 'absolute',
        top: -5,
        right: -5
    }
})

export default FinalizedOrderCard