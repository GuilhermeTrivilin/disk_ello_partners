import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import RoundedInput from '~/components/inputs/Rounded'
import RoundedButton from '~/components/buttons/Rounded'
import Layout from './Layout'

import { maskOptions } from '~/values/maskOptions'

const BasicInfos = () => {

    const [name, setName] = useState("Guilherme Pimentel Trivilin")
    const [phone, setPhone] = useState("27992573600")
    const [birthDate, setBirthDate] = useState("00000000")
    const [email, setEmail] = useState("trivilin.dev@hotmail.com")
    const [cpf, setCpf] = useState("00000000000")

    return <Layout title="Informações básicas">
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
        </View>

        <RoundedInput
            label="Nome"
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
                label="Data de aniversário"
                type="datetime"
                options={maskOptions.date}
                value={birthDate}
                onChangeText={setBirthDate}
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
            onChangeText={setCpf}
            value={cpf}
            disabled
            hasMask
        />

        <RoundedButton
            text='Salvar'
            styleContainer={styles.saveButton}
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
})

export default BasicInfos