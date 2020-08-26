export const isEmpty = (fields) => {
    let empty = false

    fields.forEach((item, index) => item ? empty = false : empty = true)

    return empty
}

export const isNumber = (fields) => {
    let valid = true

    fields.forEach((item, index) => isNaN(item) ? valid = false : valid = false)

    return valid
}