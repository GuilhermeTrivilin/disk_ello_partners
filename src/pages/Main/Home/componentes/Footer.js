import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { shadow } from '~/commons'
import { Switch } from 'react-native-switch'

const Footer = () => {

    const [attending, setAttending] = useState(false)

    const SwitchView = () => <View style={styles.switchView}>
        <Text style={styles.text}>Atendendo</Text>

        <Switch
            value={attending}
            onValueChange={setAttending}
            circleSize={20}
            backgroundActive={'green'}
            backgroundInactive={'red'}
            circleActiveColor={'#fff'}
            circleInActiveColor={'#fff'}
            innerCircleStyle={styles.switchButton} // style for inner animated circle for what you (may) be rendering inside the circle
            renderActiveText={false}
            renderInActiveText={false}
        />
    </View>

    const ServicesView = () => <View style={styles.servicesView}>
        <Text style={styles.text}>Serviços disponíveis</Text>
        <View style={styles.servicesQuantityView}>
            <Text style={styles.servicesQuantityText}>10</Text>
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
    switchButton: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#e1e1e1'
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