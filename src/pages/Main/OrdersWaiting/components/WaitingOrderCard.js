import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { shadow, colors } from '~/commons'
import RoundedButton from '~/components/buttons/Rounded'

const WaitingOrderCard = () => {

    const path = {
        logo: require("~/assets/logo-02.png")
    }

    return <View style={[styles.container, shadow]}>
        <View style={styles.infosWrapper}>
            <View style={styles}>
                <Text style={styles.label}>Cliente</Text>
                <Text style={styles.label}>Serviço</Text>
                <Text style={styles.label}>Endereço</Text>
                <Text style={styles.label}>Tempo</Text>
                <Text style={styles.label}>Valor</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    Claudio
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    Corte de cabelo
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    Rua Amaro Neto, Itapuaasdasdasdasdasdasdasdasdas
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    30 minutos restantes
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    R$ 150,00
                </Text>
            </View>
        </View>

        <View style={styles.buttonsWrapper}>
            <RoundedButton
                text="Aceitar"
                styleContainer={{ width: "30%" }}
            />
            <RoundedButton
                text="Recusar"
                backgroundColor={colors.red}
                styleContainer={{ width: "30%" }}
            />
        </View>

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
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        fontWeight: 'bold',
        lineHeight: 25
    },
    text: {
        lineHeight: 25,
        width: '75%'
    },
    logo: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 10,
        right: 10
    }
})

export default WaitingOrderCard