import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'

export default function FifthStep({ navigation }) {

    const [birthDate, setBirthDate] = useState('')
    const [cpf, setCpf] = useState('')

    return (
        <Background
            logoPosition={{ right: 0, bottom: 0 }}
            hasLogo
        >
            <View style={styles.container}>

                <View style={styles.textView}>
                    <Text style={styles.title}>Agora precisamos</Text>
                    <Text style={styles.title}>de uma foto sua!</Text>
                </View>

                <View>
                    <View style={{
                        width: '75%',
                        height: 250,
                        borderWidth: 1,
                        borderColor: 'gray',
                        alignSelf: 'center',
                        backgroundColor: '#fff'
                    }}
                    />

                    <Text style={styles.text}>
                        A foto deve estar nítica, captar seu rosto e em local bem iluminado. Retire qualquer acessório que cubra seu rosto.
                    </Text>
                </View>

                <TransparentButton
                    text='Próximo'
                    command={() => navigation.navigate('RegisterSixthStep')}
                    style={styles.button}
                />

            </View>
        </Background>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 27,
        textAlign: 'center'
    },
    bold: {
        fontWeight: 'bold'
    },
    textView: {
        flex: 0.6,
        justifyContent: 'center'
    },
    inputView: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    button: {
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        marginHorizontal: 40,
        textAlign: 'center',
        marginVertical: 20
    }
})