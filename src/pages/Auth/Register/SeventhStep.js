import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import RegisterLayout from '~/components/FormLayout'

import { useRegisterProvider } from '~/states/RegisterManage'
import { isEmpty } from '~/helpers/validateFields'
import { showToast } from '~/helpers/showToast'
import { useGlobalState } from '~/states/ContextProvider'
import { registerPartner } from '~/services/auth'
import { saveToken } from '~/services/manageToken'
import { setDefaultHeaders } from '~/services/http'
import { CommonActions } from '@react-navigation/native'

export default function SeventhStep({ navigation }) {

    const {
        name,
        birth_date,
        cpf,
        email,
        phone,
        password,
        avatar,
        city,
        neighborhood,
        state,
        street,
        street_number,
        zipcode,
        rg_number,
        expedition_date,
        dispatching_agency,
        mother_name,

        card_number,
        setCard_number,
        card_holder_name,
        setCard_holder_name,
        card_expiration_date,
        setCard_expiration_date,
        card_cvv,
        setCard_cvv,
    } = useRegisterProvider()

    const { setLoading, setUser } = useGlobalState()

    const handleNext = async () => {
        if (isEmpty([card_number, card_holder_name, card_expiration_date, card_cvv])) return showToast("Preencha todos os campos.")

        setLoading(true)
        const response = await registerPartner({
            name,
            birth_date,
            cpf,
            email,
            phone,
            password,
            avatar,
            city,
            neighborhood,
            state,
            street,
            street_number,
            zipcode,
            rg_number,
            expedition_date,
            dispatching_agency,
            mother_name,
            card_number,
            card_holder_name,
            card_expiration_date,
            card_cvv,
        })
        setLoading(false)

        if (response?.errors) return showResponseErrors(response.errors)
        if (!response) return showToast("Houve um erro ao completar sua solicitação.")

        if (response) {
            await saveToken(response.token)
            await setDefaultHeaders(response.token)
            setUser(response.partner)

            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Preload' }],
                })
            );
        }
    }

    const showResponseErrors = (errors) => {
        let displayedError = false
        const arrayKeys = Object.keys(errors)

        arrayKeys.forEach(item => {
            if (displayedError) return

            showToast(errors[item][0])
            displayedError = true
        })
    }

    return (
        <RegisterLayout>
            <View style={styles.textView}>
                <Text style={styles.text}>Hora de pagar sua</Text>
                <Text style={[styles.text, styles.bold]}>INSCRIÇÃO!</Text>
                <Text style={styles.subTitle}>Apenas R$1.397,00</Text>
            </View>

            <View style={styles.inputView}>
                <TransparentInput
                    label='Número do cartão'
                    type={'credit-card'}
                    value={card_number}
                    onChangeText={setCard_number}
                    keyboardType="numeric"
                />
                <TransparentInput
                    label='Nome do proprietário do cartão'
                    value={card_holder_name}
                    onChangeText={setCard_holder_name}
                />
                <TransparentInput
                    label='Data de validade'
                    type='datetime'
                    options={{ format: 'DD/MM' }}
                    value={card_expiration_date}
                    onChangeText={setCard_expiration_date}
                    keyboardType="numeric"
                />
                <TransparentInput
                    label='CVV'
                    value={card_cvv}
                    onChangeText={setCard_cvv}
                    maxLength={3}
                    keyboardType="numeric"
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
    text: {
        fontSize: 27,
        textAlign: 'center'
    },
    bold: {
        fontWeight: 'bold'
    },
    textView: {
        flex: 0.5,
        justifyContent: 'center',
        marginBottom: 50
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
        flex: 0.5,
        justifyContent: 'center'
    },
    subTitle: {
        fontSize: 20,
        textAlign: 'center'
    }
})