import React, { useEffect } from 'react'
import {
    View,
    StyleSheet,
    Image,
    StatusBar,
    ActivityIndicator
} from 'react-native'

import Background from '~/components/Background'

import { checkPartnerToken } from '~/services/auth'
import { colors } from '~/commons'
import { CommonActions } from '@react-navigation/native'
import { useGlobalState } from '~/states/ContextProvider'

const image = {
    logo: require('~/assets/logo-01.png')
}

export default function Preload({ navigation }) {

    const { setUser } = useGlobalState()

    useEffect(() => {verifyPartner()}, [])

    const verifyPartner = async () => {
        const user = await checkPartnerToken()

        if (user) {
            setUser(user)
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Connected',
                        },
                    ],
                })
            );
            return
        }

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'Start',
                    },
                ],
            })
        );
    }

    return (
        <Background>

            <StatusBar backgroundColor={colors.red} barStyle='dark-content' />

            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={image.logo}
                    />

                    <ActivityIndicator size="large" color={colors.green} style={{marginTop: 30}} />
                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
})