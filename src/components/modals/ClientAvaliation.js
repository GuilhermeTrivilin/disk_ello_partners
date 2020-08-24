import React from 'react'

import DefaultModal from './DefaultModal'
import Divider from '../Divider'
import RoundedButton from '../buttons/Rounded'

import { View, StyleSheet, Text } from 'react-native'
import { colors } from '~/commons'
import RenderStars from '../RenderStars'
import { TextInput } from 'react-native-gesture-handler'

const ClientAvaliationModal = ({ visible, closeModal }) => {

    return <DefaultModal
        visible={visible}
        closeModal={closeModal}
        styleContainer={styles.container}
    >
        <View>
            <Text style={styles.title}>Avaliar cliente</Text>
            <Divider />
        </View>


        <View>
            <View style={{
                backgroundColor: '#FFF',
                width: 140,
                height: 140,
                borderRadius: 140 / 2,
                borderWidth: 1,
                borderColor: 'gray',
                alignSelf: 'center',
                marginVertical: 15
            }} />
            <Text style={styles.clientName}>Marcos Affonso</Text>

            <Divider />
        </View>


        <View style={styles.stars}>
            <Text style={styles.avaliationText}>Avaliação</Text>
            <RenderStars stars_length={3} size={20} />
        </View>

        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Escreva uma resenha sobre o cliente"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
            />
        </View>

        <View style={styles.buttonsWrapper}>

            <RoundedButton
                text="CANCELAR"
                styleContainer={{ width: '45%' }}
                backgroundColor={colors.red}
                command={closeModal}
            />

            <RoundedButton
                text="FINALIZAR"
                styleContainer={{ width: '45%' }}
            />
        </View>
    </DefaultModal>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        borderTopWidth: 7,
        borderTopColor: colors.green
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        marginVertical: 10
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputWrapper: {
        marginVertical: 15,
        borderColor: colors.green,
        borderWidth: 2,
        padding: 5,
        borderRadius: 10
    },
    clientName: {
        alignSelf: 'center',
        fontSize: 18
    },
    stars: {
        alignSelf: 'center',
        marginVertical: 10
    },
    avaliationText: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 5
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    }
})

export default ClientAvaliationModal