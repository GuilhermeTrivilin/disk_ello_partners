import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Header from '~/components/Header'
import Card from './components/DefaultCard'
import Address from './components/Address'
import PaymentInfo from './components/PaymentInfo'
import Footer from './components/Footer'

import { useGlobalState } from '~/states/ContextProvider'
import { validateForm } from './helpers/validateForm'
import { showToast } from '~/helpers/showToast'
import { paymentCartItems } from '~/services/cart'

export default function ServiceSchedule({ navigation, route }) {
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [street, setStreet] = useState('')
    const [street_number, setStreet_number] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [card_number, setCard_number] = useState('')
    const [card_holder_name, setCard_holder_name] = useState('')
    const [card_expiration_date, setCard_expiration_date] = useState('')
    const [card_cvv, setCard_cvv] = useState('')
    const [useCredits, setUseCredits] = useState(false)

    const [loading, setLoading] = useState(false)

    const { user } = useGlobalState()

    Feather.loadFont()
    FontAwesome.loadFont()

    const handleConfirmButton = async () => {
        if(!validateForm(states)) return

        setLoading(true)
        const response = await paymentCartItems({
            state,
            city,
            neighborhood,
            street,
            street_number,
            zipcode,
            card_number,
            card_holder_name,
            card_expiration_date,
            card_cvv,
            credits: useCredits ? user.credits : 0,
        })
        setLoading(false)

        if(response.success){
            successResponse()
        }
    }

    const successResponse = () => {
        showToast("Produtos comprados com sucesso.")
        navigation.navigate("Connected")
    }

    const states = {
        state,
        setState,
        city,
        setCity,
        neighborhood,
        setNeighborhood,
        street,
        setStreet,
        street_number,
        setStreet_number,
        zipcode,
        setZipcode,
        card_number,
        setCard_number,
        card_holder_name,
        setCard_holder_name,
        card_expiration_date,
        setCard_expiration_date,
        card_cvv,
        setCard_cvv,
    }

    return (
        <View style={styles.container} >
            <Header
                title='Pagar produtos'
                command={() => navigation.goBack()}
                navigation={navigation}
                goBack
            />
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >

                <Card
                    icon={<Feather name='map-pin' size={25} style={{ marginRight: 10 }} />}
                    title='Endereço onde ocorrerá o serviço'
                    content={<Address {...states} />}
                />

                <PaymentInfo {...states} />

                <Footer
                    handleConfirmButton={handleConfirmButton}
                    loading={loading}
                    toggleUseCredits={() => setUseCredits(!useCredits)}
                    totalValue={route?.params?.totalValue}
                    {...states}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {

    },
})