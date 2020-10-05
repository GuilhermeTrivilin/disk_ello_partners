import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import RegisterLayout from '~/components/FormLayout'

import { useRegisterProvider } from '~/states/RegisterManage'
import { isEmpty } from '~/helpers/validateFields'
import { showToast } from '~/helpers/showToast'

export default function FourthStep({ navigation }) {

    const { password, setPassword } = useRegisterProvider()

    const [confirmPassword, setConfirmPassword] = useState()

    const handleNext = () => {
        if (!validateForm()) return
        navigation.navigate('RegisterFifthStep')
    }

    const validateForm = () => {
        if (isEmpty([password, confirmPassword])) {
            showToast("Preencha todos os campos.")
            return false
        }

        if (password !== confirmPassword) {
            showToast("As senhas precisam ser iguais.")
            return false
        }

        return true
    }

    return (
        <RegisterLayout>
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
                    command={handleNext}
                    style={styles.button}
                />
            </View>
        </RegisterLayout>
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