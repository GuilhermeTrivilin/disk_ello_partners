import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import RegisterLayout from '~/components/RegisterLayout'

import { useRegisterProvider } from '~/states/RegisterManage'
import { isEmpty } from '~/helpers/validateFields'
import { showToast } from '~/helpers/showToast'
import { useGlobalState } from '~/states/ContextProvider'
import { getAddress } from '~/services/zipCode'

export default function ThirdStep({ navigation }) {

    const {
        zipcode,
        setZipcode,
        state,
        setState,
        street,
        setStreet,
        street_number,
        setStreet_number,
        neighborhood,
        setneighborhood,
        city,
        setCity
    } = useRegisterProvider()

    const { setLoading } = useGlobalState()

    const handleNext = () => {
        if (isEmpty([zipcode, state, street, street_number, neighborhood, city])) return showToast("Preencha todos os campos.")
        navigation.navigate('RegisterFourthStep')
    }

    const getAddressByZipCode = async () => {
        setLoading(true)
        const response = await getAddress(zipcode)
        setLoading(false)

        setState(response.uf)
        setStreet(response.logradouro)
        setneighborhood(response.bairro)
        setCity(response.localidade)
    }

    return (
        <RegisterLayout>
            <View style={styles.textView}>
                <Text style={styles.text}>Hora de inserir seus</Text>
                <Text style={styles.text}>dados residenciais!</Text>
            </View>

            <View style={styles.inputView}>
                <View style={styles.doubleInputs}>
                    <TransparentInput
                        label='CEP'
                        type={'zip-code'}
                        styleContainer={{ width: '60%' }}
                        styleLabel={{ textAlign: 'left' }}
                        value={zipcode}
                        onChangeText={(maskedText, rawText) => setZipcode(rawText)}
                        onBlur={getAddressByZipCode}
                        includeRawValueInChangeText
                    />

                    <TransparentInput
                        label='UF'
                        styleContainer={{ width: '25%' }}
                        styleLabel={{ textAlign: 'left' }}
                        value={state}
                        onChangeText={setState}
                    />
                </View>

                <View style={styles.doubleInputs}>
                    <TransparentInput
                        label='Rua'
                        styleContainer={{ width: '60%' }}
                        styleLabel={{ textAlign: 'left' }}
                        value={street}
                        onChangeText={setStreet}
                    />

                    <TransparentInput
                        label='Nº'
                        styleContainer={{ width: '25%' }}
                        styleLabel={{ textAlign: 'left' }}
                        value={street_number}
                        onChangeText={setStreet_number}
                    />
                </View>

                <TransparentInput
                    label='Bairro'
                    styleContainer={{ width: '93%' }}
                    styleLabel={{ textAlign: 'left' }}
                    value={neighborhood}
                    onChangeText={setneighborhood}
                />

                <TransparentInput
                    label='Cidade'
                    styleContainer={{ width: '93%' }}
                    styleLabel={{ textAlign: 'left' }}
                    value={city}
                    onChangeText={setCity}
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
    doubleInputs: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: '100%',
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