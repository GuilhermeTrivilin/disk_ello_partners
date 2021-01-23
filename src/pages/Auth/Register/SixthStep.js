import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import TransparentInput from '~/components/inputs/Transparent'
import TransparentButton from '~/components/buttons/BigTransparent'
import RegisterLayout from '~/components/FormLayout'

import { useRegisterProvider } from '~/states/RegisterManage'
import { maskOptions } from '~/values/maskOptions'
import { showToast } from '~/helpers/showToast'
import { isEmpty } from '~/helpers/validateFields'

export default function SixthStep({ navigation }) {

    const {
        setRg_number,
        setExpedition_date,
        setDispatching_agency,
        setMother_name,
        rg_number,
        expedition_date,
        dispatching_agency,
        mother_name,
    } = useRegisterProvider()

    const handleNext = () => {
        if (isEmpty([rg_number, expedition_date, dispatching_agency, mother_name])) return showToast("Preencha todos os campos.")
        navigation.navigate("RegisterSeventhStep")
    }

    return (
        <RegisterLayout>
            <View style={styles.textView}>
                <Text style={styles.text}>Agora precisamos do seu</Text>
                <Text style={styles.text}>documento de identidade.</Text>
            </View>

            <View style={styles.inputView}>
                <TransparentInput
                    label='Número do RG'
                    styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                    value={rg_number}
                    onChangeText={setRg_number}
                    type={'custom'}
                    options={maskOptions.rg}
                />

                <TransparentInput
                    label='Data da expedição:'
                    type={'datetime'}
                    options={maskOptions.date}
                    styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                    value={expedition_date}
                    onChangeText={setExpedition_date}
                />

                <TransparentInput
                    label='Órgão expeditor'
                    styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                    value={dispatching_agency}
                    onChangeText={setDispatching_agency}
                />

                <TransparentInput
                    label='Nome da mãe'
                    styleLabel={{ textAlign: 'left', marginBottom: 5 }}
                    value={mother_name}
                    onChangeText={setMother_name}
                />

            </View>

            <View style={styles.buttonWrapper}>
                <TransparentButton
                    text='Concluir'
                    command={handleNext}
                    style={styles.button}
                />
            </View>
        </RegisterLayout>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 27,
        textAlign: 'center'
    },
    bold: {
        fontWeight: 'bold'
    },
    textView: {
        flex: 1,
        justifyContent: 'center'
    },
    inputView: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        alignSelf: 'center',
        marginTop: 20
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center'
    }
})