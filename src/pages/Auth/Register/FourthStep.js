import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import { useRegisterProvider } from '~/states/RegisterManage'

export default function FourthStep({ navigation }) {

    const { password, setPassword } = useRegisterProvider()

    const [confirmPassword, setConfirmPassword] = useState()

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
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TransparentInput
                        label='Repita a senha:'
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                </View>

                <View style={styles.buttonWrapper}>
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
    title: {
        fontSize: 27,
        textAlign: 'center'
    },
    text: {
        marginHorizontal: 40,
        textAlign: 'center',
        marginVertical: 20
    },
    container: {
        flex: 1
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