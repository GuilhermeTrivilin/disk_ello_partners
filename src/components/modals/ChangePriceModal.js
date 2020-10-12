import React, { useState } from 'react'

import RoundedInput from '../inputs/Rounded'
import RoundedButton from '../buttons/Rounded'
import LayoutModal from './LayoutModal'

import { View, StyleSheet} from 'react-native'
import { colors } from '~/commons'
import { showToast } from '~/helpers/showToast'
import { updateUserService } from '~/services/services'

const ChangePriceModal = ({ visible, closeModal, service }) => {
    const { id, price, status } = service

    const [editedPrice, setEditedPrice] = useState(() => price.toString())
    const [loading, setLoading] = useState(false)

    const handleChange = async () => {
        if (!editedPrice) return showToast("Preencha todos os campos.")

        setLoading(true)
        const response = await updateUserService(id, { 
            serviceStatus: status === 'active', 
            price: editedPrice
        })
        setLoading(false)

        if (!response || response?.errors) {
            closeModal()
            showToast("Houve um erro ao completar sua solicitação.")
            return
        }

        if (response) {
            closeModal()
            showToast("Serviço adicionado com sucesso!")
        }
    }

    return <LayoutModal
        visible={visible}
        closeModal={closeModal}
        title="Editar valor"
    >
        <View style={styles.inputsWrapper}>
            <View style={{ marginBottom: 20 }}>
                <RoundedInput
                    label="Valor do serviço (R$)"
                    keyboardType="numeric"
                    onChangeText={setEditedPrice}
                    value={editedPrice}
                />
            </View>
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
                loading={loading}
                command={handleChange}
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

export default ChangePriceModal