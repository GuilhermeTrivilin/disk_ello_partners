import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from '~/components/Header'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { colors, shadow } from '~/commons'

export default function ContactUs({ navigation, route }) {

    Entypo.loadFont()
    MaterialCommunityIcons.loadFont()

    return (
        <View style={[styles.container, shadow]}>
            <Header
                title='Fale conosco'
                route={route}
                navigation={navigation}
                title='Fale conosco'
            />

            <View style={styles.box}>
                <View style={styles.header}>
                    <Entypo name="chat" size={25} />
                    <Text style={styles.title}>COMO FUNCIONA?</Text>
                </View>

                <Text style={styles.text}>
                    <Text>Para suporte, dúvidas ou qualquer outra necessidade em que você acredite que precise de entrar em contato com a nossa equipe use nosso</Text>
                    <Text style={styles.bold}> e-mail ou Whatsapp.</Text>
                </Text>
            </View>

            <View style={styles.box}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name='email' size={25} />
                    <Text style={styles.title}>Atendimento@diskello.com</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.header}>
                    <MaterialCommunityIcons name='whatsapp' size={25} />
                    <Text style={styles.title}>(21) 98198 - 7270</Text>
                </View>
            </View>

            <View style={styles.box}>
                <Text style={styles.text}>
                    <Text>Garantimos que em até 24 horas sua mensagem, tanto pelo </Text>
                    <Text style={styles.bold}>Whatsapp </Text>
                    <Text>quanto pelo </Text>
                    <Text style={styles.bold}>e-mail </Text>
                    <Text>será respondida.</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        backgroundColor: '#FFF',
        margin: 15,
        borderRadius: 10,
        padding: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        lineHeight: 22
    },
    bold: {
        fontWeight: 'bold'
    }
})