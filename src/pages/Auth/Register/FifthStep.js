import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import Background from '~/components/Background'
import TransparentButton from '~/components/buttons/BigTransparent'
import { imagePicker } from '~/helpers/imagePicker'
import { useRegisterProvider } from '~/states/RegisterManage'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { isEmpty } from '~/helpers/validateFields'
import { showToast } from '~/helpers/showToast'

export default function FifthStep({ navigation }) {

    const { photo, setPhoto } = useRegisterProvider()
    const [source, setSource] = useState(() => photo)

    const selectedImage = photo ? {uri: source} : require("~/assets/default_image.jpg")

    const handleNext = () => {
        if (isEmpty([photo])) return showToast("Você precisa tirar a foto.")
        navigation.navigate('RegisterSixthStep')
    }

    return (
        <Background logoPosition={{ right: 0, bottom: 0 }} hasLogo>
            <View style={styles.container}>

                <View style={styles.textView}>
                    <Text style={styles.title}>Agora precisamos</Text>
                    <Text style={styles.title}>de uma foto sua!</Text>
                </View>

                <View style={styles.imageWrapper}>
                    <TouchableOpacity onPress={() => imagePicker(setSource, setPhoto)}>
                        <Image
                            style={styles.image}
                            source={selectedImage}
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

            </View>
        </Background>
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