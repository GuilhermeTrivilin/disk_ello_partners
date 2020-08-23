import React from 'react'

import DefaultModal from './DefaultModal'
import Divider from '../Divider'
import RoundedInput from '../inputs/Rounded'
import RoundedButton from '../buttons/Rounded'
import PickerInput from '../inputs/Picker'

import { View, StyleSheet, Text } from 'react-native'
import { colors } from '~/commons'

const NewServiceModal = ({ visible, closeModal }) => {

    return <DefaultModal
        visible={visible}
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
            <PickerInput
                placeholder='Selecione uma categoria'
                items={[{ label: 'ITEM TESTE', value: 'ITEM TESTE' }]}
                onChange={console.log}
            />

            <PickerInput
                placeholder='Selecione um serviço'
                items={[{ label: 'ITEM TESTE', value: 'ITEM TESTE' }]}
                onChange={console.log}
            />

            <View style={{ marginTop: 10 }}>
                <RoundedInput
                    label="Valor do serviço (R$)"
                    keyboardType="numeric"
                />
            </View>

            <Divider marginVertical={20} />
        </View>


        <View style={styles.buttonsWrapper}>
            <RoundedButton
                text="CANCELAR"
                styleContainer={{ width: '45%' }}
                backgroundColor={colors.red}
                command={closeModal}
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
    inputsWrapper: {
        marginTop: 25
    }
})

export default NewServiceModal