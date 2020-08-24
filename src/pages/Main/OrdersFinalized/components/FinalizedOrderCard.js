import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { shadow, colors } from '~/commons'
import RoundedButton from '~/components/buttons/Rounded'
import RenderStars from '~/components/RenderStars'

const FinalizedOrderCard = () => {

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

        <View style={styles.avaliationWrapper}>
            <View style={styles.starsRow}>
                <Text style={styles.label}>Avaliação</Text>
                <RenderStars
                    stars_length={3}
                    size={12}
                />
            </View>

            <Text>
                Gostei muito dos serviços prestados, voltaria a contratar neste aplicativo!
            </Text>
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
    avaliationWrapper: {
        alignItems: 'center'
    },
    starsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: 10
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
        bottom: 10,
        right: 10
    }
})

export default FinalizedOrderCard