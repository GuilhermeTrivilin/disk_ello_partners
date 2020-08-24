import React from 'react'

import Divider from '../Divider'
import RoundedInput from '../inputs/Rounded'
import RoundedButton from '../buttons/Rounded'
import PickerInput from '../inputs/Picker'
import LayoutModal from './LayoutModal'

import { View, StyleSheet, Text } from 'react-native'
import { colors } from '~/commons'

const NewServiceModal = ({ visible, closeModal }) => {

    return <LayoutModal
        visible={visible}
        closeModal={closeModal}
        title="Novo serviço"
    >
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
    </LayoutModal>
}

const styles = StyleSheet.create({
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