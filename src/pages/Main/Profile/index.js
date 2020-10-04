import React from 'react'
import { ScrollView } from 'react-native'

import Header from '~/components/Header'
import BasicInfos from './components/BasicInfos'
import ChangePassword from './components/ChangePassword'

export default function Profile({ navigation, route }) {
    return <>
        <Header
            navigation={navigation}
            route={route}
            title="Meu perfil"
        />

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <BasicInfos />
            <ChangePassword />
        </ScrollView>
    </>
}