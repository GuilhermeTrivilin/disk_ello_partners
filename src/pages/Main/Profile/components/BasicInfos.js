import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import RoundedInput from '~/components/inputs/Rounded'
import RoundedButton from '~/components/buttons/Rounded'
import Layout from './Layout'

const BasicInfos = () => {

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
            value="Guilherme Pimentel Trivilin"
        />

        <View style={styles.doubleInput}>
            <RoundedInput
                label="Telefone"
                value="(27) 992573600"
                style={{ width: '46%' }}
            />
            <RoundedInput
                label="Data de aniversário"
                value="00/00/0000"
                style={{ width: '46%' }}
            />
        </View>

        <RoundedInput
            label="Email"
            value="trivilin.dev@hotmail.com"
            disabled
        />

        <RoundedInput
            label="CPF"
            value="000.000.000-00"
            disabled
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