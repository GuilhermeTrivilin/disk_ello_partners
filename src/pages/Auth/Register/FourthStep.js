import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'

export default function FourthStep({ navigation }) {

    const [birthDate, setBirthDate] = useState('')
    const [cpf, setCpf] = useState('')

    return (
        <Background
            logoPosition={{ right: 0, bottom: 0 }}
            hasLogo
        >
            <View style={styles.container}>

                <View style={styles.textView}>
                    <Text style={styles.title}>Cadastre uma senha</Text>
                    <Text style={styles.title}>de acesso.</Text>
                </View>

                <View style={styles.inputView}>
                    <TransparentInput
                        label='Senha:'
                    />
                    <TransparentInput
                        label='Repita a senha:'
                    />

                    <Text style={styles.text}>
                        Sua senha poderá ser modificada a qualquer momento na opção "Meus Dados"
                    </Text>

                    <TransparentButton
                        text='Próximo'
                        command={() => navigation.navigate('RegisterFifthStep')}
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
    title: {
        fontSize: 27,
        textAlign: 'center'
    },
    bold: {
        fontWeight: 'bold'
    },
    textView: {
        flex: 0.5,
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