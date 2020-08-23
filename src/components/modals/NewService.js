import React from 'react'

import DefaultModal from './DefaultModal'
import { View, StyleSheet, Text } from 'react-native'
import Divider from '../Divider'
import RoundedInput from '../inputs/Rounded'
import RoundedButton from '../buttons/Rounded'
import { colors } from '~/commons'
import PickerInput from '../inputs/Picker'

const NewServiceModal = ({ visible, closeModal }) => {

    return <DefaultModal
        visible={true}
        closeModal={closeModal}
        styleContainer={styles.container}
    >
        <View>
            <Text style={styles.title}>Novo serviço</Text>
            <Divider />
        </View>

        <Text style={styles.text}>
            Escolha um dos nossos serviços abaixo para começar a receber chamados!
        </Text>

        <View style={styles.inputsWrapper}>
            <PickerInput />
            
            <RoundedInput
                label="Valor do serviço (R$)"
            />
        </View>

        <Divider marginVertical={20} />

        <View style={styles.buttonsWrapper}>
            <RoundedButton
                text="CANCELAR"
                styleContainer={{ width: '45%' }}
                backgroundColor={colors.red}
            />

            <RoundedButton
                text="ADICIONAR"
                styleContainer={{ width: '45%' }}
            />
        </View>
    </DefaultModal>
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        backgroundColor: '#FFF',
        padding: 10
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
    inputsWrapper: {
        marginTop: 25
    }
})

export default NewServiceModal