import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import RegisterLayout from '~/components/FormLayout'

import { useRegisterProvider } from '~/states/RegisterManage'
import { isEmpty } from '~/helpers/validateFields'
import { showToast } from '~/helpers/showToast'

export default function SecondStep({ navigation }) {

    const { email, setEmail, phone, setPhone } = useRegisterProvider()

    const handleNext = () => {
        if (isEmpty([email, phone])) return showToast("Preencha todos os campos.")
        navigation.navigate('RegisterThirdStep')
    }

    return (
        <RegisterLayout>
            <View style={styles.textView}>
                <Text style={styles.text}>Hora de inserir seus</Text>
                <Text style={styles.text}>dados para contato!</Text>
            </View>

            <View style={styles.inputView}>
                <TransparentInput
                    label='Email:'
                    onChangeText={setEmail}
                    value={email}
                />

                <TransparentInput
                    label='DDD + Celular:'
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={phone}
                    onChangeText={setPhone}
                />

            </View>

            <View style={styles.buttonWrapper}>
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