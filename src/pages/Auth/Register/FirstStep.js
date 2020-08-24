import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'

export default function FirstStep({ navigation }) {

    const [birthDate, setBirthDate] = useState('')
    const [cpf, setCpf] = useState('')

    return (
        <Background
            logoPosition={{ right: 0, bottom: 0 }}
            hasLogo
        >
            <View style={styles.container}>

                <View style={styles.textView}>
                    <Text style={styles.text}>Hora de inserir seus</Text>
                    <Text style={[styles.text, styles.bold]}>DADOS DE</Text>
                </View>

                <View style={styles.inputView}>
                    <TransparentInput
                        label='Nome completo:'
                    />

                    <TransparentInput
                        label='Data de nascimento:'
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={birthDate}
                        onChangeText={setBirthDate}
                    />

                    <TransparentInput
                        label='CPF:'
                        type={'cpf'}
                        value={cpf}
                        onChangeText={setCpf}
                    />

                </View>

                <View style={styles.buttonWrapper}>
                    <TransparentButton
                        text='Próximo'
                        command={() => navigation.navigate('RegisterSecondStep')}
                        style={styles.button}
                    />
                </View>
            </View>
        </Background>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 27,
        textAlign: 'center'
    },
    bold: {
        fontWeight: 'bold'
    },
    textView: {
        flex: 1,
        justifyContent: 'center'
    },
    inputView: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        alignSelf: 'center',
        marginTop: 20
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center'
    }
})