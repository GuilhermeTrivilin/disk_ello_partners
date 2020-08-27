import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'

import { useRegisterProvider } from '~/states/RegisterManage'
import { maskOptions } from '~/values/maskOptions'
import { isEmpty } from '~/helpers/validateFields'
import { showToast } from '~/helpers/showToast'
import { registerPartner } from '~/services/auth'
import { useGlobalState } from '~/states/ContextProvider'
import { saveToken } from '~/services/manageToken'
import { setDefaultHeaders } from '~/services/http'
import { CommonActions } from '@react-navigation/native'

export default function SixthStep({ navigation }) {

    const {
        name,
        birth_date,
        cpf,
        email,
        phone,
        password,
        photo,
        city,
        district,
        state,
        street,
        street_number,
        zip_code,
        rg_number,
        expedition_date,
        dispatching_agency,
        mother_name,

        setRg_number,
        setExpedition_date,
        setDispatching_agency,
        setMother_name,
    } = useRegisterProvider()

    const { setLoading, setUser } = useGlobalState()

    const handleNext = async () => {
        if (isEmpty([rg_number, expedition_date, dispatching_agency, mother_name])) return showToast("Preencha todos os campos.")

        setLoading(true)
        const response = await registerPartner({
            name,
            birth_date,
            cpf,
            email,
            phone,
            password,
            photo,
            city,
            district,
            state,
            street,
            street_number,
            zip_code,
            rg_number,
            expedition_date,
            dispatching_agency,
            mother_name,
        })
        setLoading(false)

        if(response.data) {
            await saveToken(response.data.token)
            await setDefaultHeaders(response.data.token)
            setUser(response.data.partner)

            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Preload' }],
                })
            );
        }

        alert('deu problema mano')
    }

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
                        type={'custom'}
                        options={maskOptions.rg}
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