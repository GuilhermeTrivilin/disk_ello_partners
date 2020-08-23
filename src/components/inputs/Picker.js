
import React from 'react'
import {Picker} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

const PickerInput = () => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
    );
};

export default PickerInput