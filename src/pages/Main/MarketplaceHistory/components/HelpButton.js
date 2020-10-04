import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'

const HelpButton = ({ navigation }) => {

    Entypo.loadFont()

    return <TouchableOpacity
        style={styles.container}
    >
        <Entypo
            name='light-bulb'
            size={25}
            color='#FFF'
            style={styles.icon}
        />

        <Text style={styles.text}>AJUDA</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F43721',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 5,
        alignSelf: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 24,
    },
    icon: {
        position: 'absolute',
        left: 20
    }
})

export default HelpButton