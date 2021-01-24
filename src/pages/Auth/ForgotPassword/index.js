import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import RegisterLayout from '~/components/FormLayout'
import Entypo from 'react-native-vector-icons/Entypo'

import { changePassword, generateCode } from '~/services/forgotPassword'
import { showToast } from '~/helpers/showToast'
import { isEmpty } from '~/helpers/validateFields'

export default function ForgotPassword({ navigation }) {

    Entypo.loadFont()

    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [sendedCode, setSendedCode] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleSendCode = async () => sendedCode
        ? await sendNewPassword()
        : await sendCode()

    const sendNewPassword = async () => {
        if (isEmpty([email, code, newPassword])) return showToast('Preencha todos os campos')


        setLoading(true)
        const response = await changePassword({ email, code, newPassword })
        setLoading(false)

        if (response.data.errors === "" && response.data.message === "Não foi possivel alterar a senha") {
            showToast("Código incorreto.")
        } else {
            clearStates()
            navigation.navigate("Login")
            showToast("Senha alterada com sucesso.")
        }
    }

    const clearStates = () => {
        setEmail("")
        setNewPassword("")
        setCode("")
        setSendedCode(false)
    }

    const sendCode = async () => {
        if (isEmpty([email])) return showToast('Preencha o email')

        setLoading(true)
        const response = await generateCode(email)
        setLoading(false)

        response.success ? setSendedCode(true) : showToast("O email digitado não pertence a nenhuma conta.")
    }

    const renderText = () => sendedCode ? 'Trocar senha' : 'Enviar'

    const renderInputs = () => sendedCode && <>
        <TransparentInput
            label='Código de recuperação:'
            onChangeText={setCode}
            value={code}
        />
        <TransparentInput
            label='Nova senha:'
            onChangeText={setNewPassword}
            value={newPassword}
        />
    </>

    return (
        <RegisterLayout>
            <Entypo
                name="chevron-thin-left"
                style={styles.icon}
                size={25}
                onPress={navigation.goBack}
            />

            <View style={styles.textView}>
                <Text style={styles.text}>RECUPERAÇÃO DE SENHA</Text>
                <Text style={styles.subTitle}>
                    Um SMS será enviado para o número de celular cadastrado em sua conta com um código de recuperação de senha.
                </Text>
            </View>

            <View style={styles.inputView}>
                <TransparentInput
                    label='Email:'
                    onChangeText={setEmail}
                    value={email}
                    disabled={sendedCode}
                />

                {renderInputs()}

            </View>

            <View style={styles.buttonWrapper}>
                <TransparentButton
                    text={renderText()}
                    style={styles.button}
                    arrowIcon={false}
                    command={handleSendCode}
                    loading={loading}
                />
            </View>
        </RegisterLayout>
    )

}

const styles = StyleSheet.create({
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
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 10
    },
    subTitle: {
        marginHorizontal: 30,
        textAlign: 'center'
    }
})