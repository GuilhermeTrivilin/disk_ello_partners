import React from 'react'

import Layout from './Layout'
import RoundedInput from '~/components/inputs/Rounded'
import RoundedButton from '~/components/buttons/Rounded'

const ChangePassword = () => {

    return <Layout title="Alterar senha">
        <RoundedInput
            label="Senha atual"
        />
        <RoundedInput
            label="Nova senha"
        />
        <RoundedInput
            label="Confirme a nova senha"
        />

        <RoundedButton
            text='Alterar'
            styleContainer={{alignSelf: 'flex-end', width: '40%', marginTop: 15}}
        />
    </Layout>
}

export default ChangePassword