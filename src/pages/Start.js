import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import Background from '~/components/Background'
import TransparentButton from '~/components/buttons/BigTransparent'

const path = {
    logo: require('~/assets/logo-01.png')
}

export default function Start({navigation}) {
    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        source={path.logo}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.buttons}>
                    <TransparentButton 
                        text='CADASTRAR'
                        command={() => navigation.navigate('RegisterFirstStep')}
                    />
                    <TransparentButton 
                        text='ENTRAR'
                        command={() => navigation.navigate('Login')}
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
        width: '90%',
        resizeMode: 'contain',
    },
    imageView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})