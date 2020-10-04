import React, { useState } from 'react'
import {View, Modal, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

const InitialModal = () => {

    const [visible, setVisible] = useState(false)

    const path = {
        couch: require('~/assets/couch.png')
    }

    const Button = () => <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.button}
    >
        <Text style={styles.buttonText}>COMEÇAR</Text>
    </TouchableOpacity>

    return <Modal
        visible={visible}
    >
        <LinearGradient colors={['#FFBC36', '#EC6136']} style={styles.container}>
            <View style={styles.defaultView}>
                <Text style={styles.text}>É hora de ADQUIRIR os melhores PRODUTOS de cuidado pessoal</Text>
                <Text style={[styles.text, styles.bigText]}>SEM SAIR DO SOFÁ!</Text>
            </View>

            <View style={styles.defaultView}>
                <Image 
                    style={styles.image}
                    source={path.couch}
                />
            </View>

            <View style={styles.defaultView}>
                <Button />
            </View>
        </LinearGradient>
    </Modal>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '80%',
        resizeMode: 'contain'
    },
    defaultView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 23,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 30,
    },
    bigText: {
        fontSize: 30,
        marginTop: 15
    },
    button: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        borderRadius: 40
    },
    buttonText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#F38536'
    }
})

export default InitialModal