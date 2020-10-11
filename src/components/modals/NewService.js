import React, { useEffect, useState } from 'react'

import Divider from '../Divider'
import RoundedInput from '../inputs/Rounded'
import RoundedButton from '../buttons/Rounded'
import PickerInput from '../inputs/Picker'
import LayoutModal from './LayoutModal'

import { View, StyleSheet, Text } from 'react-native'
import { colors } from '~/commons'
import { getServices, registerService } from '~/services/services'
import { useGlobalState } from '~/states/ContextProvider'
import { showToast } from '~/helpers/showToast'

const NewServiceModal = ({ visible, closeModal }) => {
    const {user} = useGlobalState()

    const [selectedSubService, setSelectedSubService] = useState(null)
    const [price, setPrice] = useState(null)
    
    const [subServicesList, setSubServicesList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => { getAllServices() }, [])

    const getAllServices = async() => {
        const response = await getServices()
        setSubServicesList(buildPickerOptions(onlySubServices(response)))
    }

    const onlySubServices = (services) => {
        let onlySubServicesArray = []
        services.forEach(item => onlySubServicesArray = [...onlySubServicesArray, ...item.sub_services])
        return onlySubServicesArray
    }

    const buildPickerOptions = (sub_services) => sub_services.map(item => ({label: item.name, value: item.id}))

    const handleAdd = async() => {
        if(!validateForm()) return showToast("Preencha todos os campos.")

        setLoading(true)
        const response = await registerService({
            partner_id: user.id, 
            sub_service_id: selectedSubService, 
            price
        })
        setLoading(false)


        if (response?.errors) return showResponseErrors(response.errors)
        if (!response) return showToast("Houve um erro ao completar sua solicitação.")

        if (response) {
            closeModal()
            showToast("Serviço adicionado com sucesso!")
        }
    }

    const showResponseErrors = (errors) => {
        let displayedError = false
        const arrayKeys = Object.keys(errors)

        arrayKeys.forEach(item => {
            if (displayedError) return

            showToast(errors[item][0])
            displayedError = true
        })
    }

    const validateForm = () => (selectedSubService && price)

    return <LayoutModal
        visible={visible}
        closeModal={closeModal}
        title="Novo serviço"
    >
        <Text style={styles.text}>
            Escolha um dos nossos serviços abaixo para começar a receber chamados!
        </Text>

        <View style={styles.inputsWrapper}>
            {/* <PickerInput
                placeholder='Selecione uma categoria'
                items={[{ label: 'ITEM TESTE', value: 'ITEM TESTE' }]}
                onChange={console.log}
            /> */}

            <PickerInput
                placeholder='Selecione um serviço'
                items={subServicesList}
                onChange={setSelectedSubService}
            />

            <View style={{ marginTop: 10 }}>
                <RoundedInput
                    label="Valor do serviço (R$)"
                    keyboardType="numeric"
                    onChangeText={setPrice}
                    value={price}
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
                loading={loading}
                command={handleAdd}
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