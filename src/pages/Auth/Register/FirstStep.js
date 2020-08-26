import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'

import { useRegisterProvider } from '~/states/RegisterManage'
import { isEmpty } from '~/helpers/validateFields'
import { showToast } from '~/helpers/showToast'

export default function FirstStep({ navigation }) {

    const { name, setName, birth_date, setBirth_date, cpf, setCpf } = useRegisterProvider()

    const handleNext = () => {
        if(isEmpty([name, birth_date, cpf])) return showToast("Preencha todos os campos.")
        navigation.navigate('RegisterSecondStep')
    }

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
                        onChangeText={setName}
                        value={name}
                    />

                    <TransparentInput
                        label='Data de nascimento:'
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={birth_date}
                        onChangeText={setBirth_date}
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
                        command={handleNext}
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