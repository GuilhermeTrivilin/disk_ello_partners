import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import RoundedInput from '~/components/inputs/Rounded'
import RoundedButton from '~/components/buttons/Rounded'
import Layout from './Layout'

import { maskOptions } from '~/values/maskOptions'
import { useGlobalState } from '~/states/ContextProvider'
import { updatePartner } from '~/services/partner'
import { showToast } from '~/helpers/showToast'
import { baseURL } from '~/commons'

const BasicInfos = () => {

    const { user, setUser } = useGlobalState()

    const [name, setName] = useState(() => user.name)
    const [phone, setPhone] = useState(() => user.phone)
    const [birth_date, setBirth_date] = useState(() => user.birth_date)
    const [email, setEmail] = useState(() => user.email)
    const [cpf, setCpf] = useState(() => user.cpf)
    const [avatar, setAvatar] = useState(() => user.avatar.url)

    const [loading, setLoading] = useState(false)

    const handleSave = async () => {
        setLoading(true)
        const response = await updatePartner(user.id, { name, phone, birth_date, email, cpf })
        setLoading(false)

        if (response?.errors) return showResponseErrors(response.errors)
        if (!response) return showToast("Houve um erro ao completar sua solicitação.")

        if (response) {
            showToast("Informações alteradas com sucesso.")
            setUser(response)
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

    return <Layout title="Informações básicas">
        <View>
            <Image
                style={styles.image}
                source={{ uri: avatar }}
            />
        </View>

        <RoundedInput
            label="Nome"
            onChangeText={setName}
            value={name}
        />

        <View style={styles.doubleInput}>
            <RoundedInput
                label="Telefone"
                type="cel-phone"
                options={maskOptions.phone}
                value={phone}
                onChangeText={setPhone}
                style={{ width: '46%' }}
                hasMask
            />
            <RoundedInput
                label="Aniversário"
                type="datetime"
                options={maskOptions.date}
                value={birth_date}
                onChangeText={setBirth_date}
                style={{ width: '46%' }}
                hasMask
            />
        </View>

        <RoundedInput
            label="Email"
            value={email}
            disabled
        />

        <RoundedInput
            label="CPF"
            type='cpf'
            value={cpf}
            disabled
            hasMask
        />

        <RoundedButton
            text='Salvar'
            styleContainer={styles.saveButton}
            loading={loading}
            command={handleSave}
        />
    </Layout>
}

const styles = StyleSheet.create({
    doubleInput: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    saveButton: {
        width: '40%',
        marginTop: 20,
        alignSelf: 'flex-end'
    },
    image: {
        backgroundColor: '#FFF',
        width: 140,
        height: 140,
        borderRadius: 140 / 2,
        borderWidth: 1,
        borderColor: 'gray',
        alignSelf: 'center',
        marginVertical: 15
    }
})

export default BasicInfos