import React from 'react'

import RoundedButton from '../buttons/Rounded'
import LayoutModal from './LayoutModal'

import { View, StyleSheet, Text, TextInput } from 'react-native'
import { colors } from '~/commons'

const CancelServiceModal = ({ visible, closeModal }) => {

    return <LayoutModal
        visible={visible}
        closeModal={closeModal}
        title="Cancelar serviço"
    >
        
        <Text style={styles.text}>Por que você deseja cancelar este serviço?</Text>

        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Digite o motivo do cancelamento"
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
    </LayoutModal>
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginVertical: 15,
        borderColor: colors.green,
        borderWidth: 2,
        padding: 5,
        borderRadius: 10
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        marginVertical: 10
    }
})

export default CancelServiceModal