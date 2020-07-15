import React from 'react'
import { View, ScrollView } from 'react-native'

import DrawerButtons from './DrawerButtons'

export default function DrawerContent(props) {
    return (
        <View {...props} >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <DrawerButtons {...props} />
            </ScrollView>
        </View>
    )
}