import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import { useRegisterProvider } from '~/states/RegisterManage'

export default function ThirdStep({ navigation }) {

    const { 
        zip_code,
        setZip_code,
        state,
        setState,
        street,
        setStreet,
        street_number,
        setStreet_number,
        district,
        setDistrict,
        city,
        setCity
     } = useRegisterProvider()

    return (
        <Background
            logoPosition={{ right: 0, bottom: 0 }}
            hasLogo
        >
            <View style={styles.container}>

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
                            value={zip_code}
                            onChangeText={setZip_code}
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
                        value={district}
                        onChangeText={setDistrict}
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
                        command={() => navigation.navigate('RegisterFourthStep')}
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