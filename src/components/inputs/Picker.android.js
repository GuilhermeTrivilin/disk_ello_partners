
import React from 'react'

import { StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

const PickerInput = ({
    placeholder,
    onChange,
    items,
    value
}) => {
    return (
        <RNPickerSelect
            onValueChange={onChange}
            style={styles}
            items={items}
            placeholder={{
                label: placeholder,
                value: null,
                color: '#ACADA8'
              }}
        />
    )
}

const styles = StyleSheet.create({
    inputAndroidContainer:{
        borderWidth: 1,
        borderColor: '#ACADA8',
        paddingHorizontal: 8,
        borderRadius: 10,
        marginVertical: 5
    },
    inputAndroid: {
        padding: 0
    }
})

export default PickerInput