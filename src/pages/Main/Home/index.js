import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Header from '../../../components/Header'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'

import { getUserServices } from '~/services/services'
import { useGlobalState } from '~/states/ContextProvider'

export default function Home({ navigation, route }) {

    const { user } = useGlobalState()

    const [servicesList, setServicesList] = useState([])

    useEffect(() => { services() }, [])

    const services = async () => {
        const servicesList = await getUserServices(user.id)
        setServicesList(servicesList)
    }

    const removeFromServices = (id) => {
        const newList = servicesList.filter(item => item.id !== id)
        setServicesList(newList)
    }

    const renderContent = <View style={styles.content}>
        <FlatList
            data={servicesList}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ServiceCard
                service={item}
                removeFromServices={removeFromServices}
            />}
        />
    </View>

    return <View style={styles.container}>
        <Header
            route={route}
            navigation={navigation}
            title='Meus serviços'
        />

        {renderContent}

        <Footer />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1
    }
})