import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { shadow } from '~/commons'
import SwitchButton from '~/components/buttons/Switch'

const Footer = ({ quantityServices }) => {

    const [attending, setAttending] = useState(false)

    const SwitchView = () => <View style={styles.switchView}>
        <Text style={styles.text}>Atendendo</Text>

        <SwitchButton
            isActive={attending}
            command={() => setAttending(!attending)}
        />
    </View>

    const ServicesView = () => <View style={styles.servicesView}>
        <Text style={styles.text}>Serviços disponíveis</Text>
        <View style={styles.servicesQuantityView}>
            <Text style={styles.servicesQuantityText}>{quantityServices}</Text>
        </View>
    </View>

    return <View style={[styles.container, shadow]}>
        <SwitchView />
        <View style={styles.divider} />
        <ServicesView />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingVertical: 5
    },
    title: {
        fontSize: 20
    },
    divider: {
        width: 1,
        height: '70%',
        backgroundColor: 'gray'
    },
    servicesQuantityView: {
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 20
    },
    servicesQuantityText: {
        color: 'white'
    },
    switchView: {

        alignItems: 'center',
        flex: 1,
        height: '100%'
    },
    servicesView: {

        alignItems: 'center',
        flex: 1,
        height: '100%'
    },
    text: {
        fontSize: 16,
        textAlignVertical: 'top',
        marginBottom: 5
    }
})

export default Footer