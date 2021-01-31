import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import TransparentButton from '~/components/buttons/BigTransparent'
import TransparentInput from '~/components/inputs/Transparent'
import FormLayout from '~/components/FormLayout'

import { isEmpty } from '~/helpers/validateFields'
import { login } from '~/services/auth'
import { saveToken } from '~/services/manageToken'
import { setDefaultHeaders } from '~/services/http'
import { CommonActions } from '@react-navigation/native'
import { showToast } from '~/helpers/showToast'
import { useGlobalState } from '~/states/ContextProvider'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'

const path = {
    logo: require('~/assets/logo-01.png')
}

export default function Login({ navigation }) {

    const { setUser } = useGlobalState()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const handleConfirm = async () => {
        if (isEmpty([email, password])) return showToast('Preencha todos os campos')

        setLoading(true)
        const response = await login(email, password)
        setLoading(false)

        if (response.data.error) return showToast(response.data.error)

        if (response.data) {
            setUser(response.data.partner)
            await saveToken(response.data.token)
            await setDefaultHeaders(response.data.token)
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Connected',
                        },
                    ],
                })
            );
            return
        }
    }

    return (
        <FormLayout>
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        source={path.logo}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.inputsView}>
                    <TransparentInput
                        label='Email:'
                        onChangeText={setEmail}
                        value={email}
                    />

                    <TransparentInput
                        label='Senha'
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        isPassword
                    />

                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text>Esqueci minha senha</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.buttons}>
                    <TransparentButton
                        text='ENTRAR'
                        command={handleConfirm}
                        loading={loading}
                    />
                </View>
            </View>

        </FormLayout>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: '90%',
        resizeMode: 'contain',
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputsView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})