import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Background from '~/components/Background'
import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'

export default function SixthStep({ navigation }) {

    const [expedition, setExpedition] = useState('')

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
                    />

                    <TransparentInput
                        label='Data da expedição:'
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={expedition}
                        onChangeText={setExpedition}
                        styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                    />

                    <TransparentInput
                        label='Órgão expeditor'
                        styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                    />

                    <TransparentInput
                        label='Nome da mãe'
                        styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                    />

                    <TransparentInput
                        label='Nome do pai'
                        styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                    />

                </View>

                <View style={styles.buttonWrapper}>
                    <TransparentButton
                        text='Próximo'
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