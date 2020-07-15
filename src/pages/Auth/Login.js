import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import Background from '~/components/Background'
import TransparentButton from '~/components/buttons/BigTransparent'
import TransparentInput from '~/components/inputs/Transparent'

const path = {
    logo: require('~/assets/logo-01.png')
}

export default function Login({navigation}) {
    return (
        <Background>
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
                        />

                    <TransparentInput
                        label='Senha'
                        secureTextEntry={true}
                    />

                </View>

                <View style={styles.buttons}>
                    <TransparentButton 
                        text='PRÓXIMO'
                        command={() => navigation.navigate('Connected')}
                    />
                </View>
            </View>

        </Background>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: '100%',
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