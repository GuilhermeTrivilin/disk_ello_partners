import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import RenderStars from '~/components/RenderStars'

const AvaliationWrapper = () => {

    return <View style={styles.avaliationWrapper}>
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
}

const styles = StyleSheet.create({
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
})

export default AvaliationWrapper