import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import TransparentButton from '~/components/buttons/BigTransparent'
import RegisterLayout from '~/components/FormLayout'

import { imagePicker } from '~/helpers/imagePicker'
import { useRegisterProvider } from '~/states/RegisterManage'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { isEmpty } from '~/helpers/validateFields'
import { showToast } from '~/helpers/showToast'

export default function FifthStep({ navigation }) {

    const { avatar, setAvatar } = useRegisterProvider()
    const [source, setSource] = useState(require("~/assets/default_image.jpg"))

    useEffect(() => { avatar && setSource({uri: avatar.uri}) }, [])

    const handleNext = () => {
        if (isEmpty([avatar])) return showToast("Você precisa tirar a foto.")
        navigation.navigate('RegisterSixthStep')
    }

    return (
        <RegisterLayout>
            <View style={styles.textView}>
                <Text style={styles.title}>Agora precisamos</Text>
                <Text style={styles.title}>de uma foto sua!</Text>
            </View>

            <View style={styles.imageWrapper}>
                <TouchableOpacity onPress={() => imagePicker(setSource, setAvatar)}>
                    <Image
                        style={styles.image}
                        source={source}
                    />
                </TouchableOpacity>

                <Text style={styles.text}>Clique na imagem para tirar uma foto!</Text>
            </View>

            <View style={styles.buttonWrapper}>
                <Text style={styles.text}>
                    A foto deve estar nítica, captar seu rosto e em local bem iluminado. Retire qualquer acessório que cubra seu rosto.
                    </Text>

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
    title: {
        fontSize: 27,
        textAlign: 'center'
    },
    text: {
        marginHorizontal: 40,
        textAlign: 'center',
        marginVertical: 20
    },
    container: {
        flex: 1
    },
    bold: {
        fontWeight: 'bold'
    },
    textView: {
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
    },
    imageWrapper: {
        flex: 1,
    },
    image: {
        height: '100%',
        width: '90%',
        alignSelf: 'center',
        resizeMode: 'contain'
    }
})