import React from 'react'
import { View } from 'react-native'

const Divider = ({
    width = '90%',
    color = 'gray',
    marginVertical = 5
}) => <View
        style={{
            width,
            backgroundColor: color,
            marginVertical,
            height: 0.5,
            alignSelf: 'center'
        }}
    />

export default Divider