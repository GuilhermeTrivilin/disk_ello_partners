import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import RoundedInput from '~/components/inputs/Rounded'
import { getAddress } from '~/services/zipCode'

export const Address = ({
    city,
    neighborhood,
    state,
    street,
    street_number,
    zipcode,
    setCity,
    setNeighborhood,
    setState,
    setStreet,
    setStreet_number,
    setZipcode
}) => {

    const getAddressByZipCode = async () => {
        const response = await getAddress(zipcode)

        setState(response.uf)
        setStreet(response.logradouro)
        setNeighborhood(response.bairro)
        setCity(response.localidade)
    }

    return (
        <View style={styles.container}>
            <RoundedInput
                label='CEP'
                type={'zip-code'}
                value={zipcode}
                onChangeText={(maskedText, rawText) => setZipcode(rawText)}
                onBlur={getAddressByZipCode}
                includeRawValueInChangeText
            />
            <RoundedInput
                label='Nº'
                value={street_number}
                onChangeText={setStreet_number}
            />
            <RoundedInput
                label='Bairro'
                value={neighborhood}
                onChangeText={setNeighborhood}
                disabled
            />
            <RoundedInput
                label='UF'
                value={state}
                onChangeText={setState}
                disabled
            />
            <RoundedInput
                label='Rua'
                value={street}
                onChangeText={setStreet}
                disabled
            />
            <RoundedInput
                label='Cidade'
                value={city}
                onChangeText={setCity}
                disabled
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Address