
import React from 'react'

import { StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

const PickerInput = ({
    placeholder,
    onChange,
    items
}) => {
    return (
        <RNPickerSelect
            onValueChange={onChange}
            style={styles}
            placeholder={{
                label: placeholder,
                value: null,
                color: '#ACADA8'
              }}
            items={items}
        />
    )
}

const styles = StyleSheet.create({
    inputIOSContainer:{
        borderWidth: 1,
        borderColor: '#ACADA8',
        padding: 8,
        borderRadius: 10,
        marginVertical: 5
    }
})

export default PickerInput