import { get, post } from './http'

export const generateCode = async (email) => await post("partners/generate_code", { email })

export const changePassword = async (body) => await post(
    "partners/recover_password",
    buildChangePasswordBody(body)
)

const buildChangePasswordBody = ({ email, code, newPassword }) => ({
    email,
    code,
    new_password: newPassword,
})