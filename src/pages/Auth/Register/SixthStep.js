import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import { useRegisterProvider } from '~/states/RegisterManage'
import { maskOptions } from '~/values/maskOptions'

export default function SixthStep({ navigation }) {

    const {
        rg_number,
        setRg_number,
        expedition_date,
        setExpedition_date,
        dispatching_agency,
        setDispatching_agency,
        mother_name,
        setMother_name
    } = useRegisterProvider()

    return (
        <Background
            logoPosition={{ right: 0, bottom: 0 }}
            hasLogo
        >
            <View style={styles.container}>

                <View style={styles.textView}>
                    <Text style={styles.text}>Agora precisamos do seu</Text>
                    <Text style={styles.text}>documento de identidade.</Text>
                </View>

                <View style={styles.inputView}>
                    <TransparentInput
                        label='Número do RG'
                        styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                        value={rg_number}
                        onChangeText={setRg_number}
                    />

                    <TransparentInput
                        label='Data da expedição:'
                        type={'datetime'}
                        options={maskOptions.date}
                        styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                        value={expedition_date}
                        onChangeText={setExpedition_date}
                    />

                    <TransparentInput
                        label='Órgão expeditor'
                        styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                        value={dispatching_agency}
                        onChangeText={setDispatching_agency}
                    />

                    <TransparentInput
                        label='Nome da mãe'
                        styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                        value={mother_name}
                        onChangeText={setMother_name}
                    />

                </View>

                <View style={styles.buttonWrapper}>
                    <TransparentButton
                        text='Concluir'
                        command={() => navigation.navigate('Connected')}
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