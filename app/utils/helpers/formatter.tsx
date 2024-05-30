export const formatString = (str:string) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/ /g, "") //delete whitespace inside string
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
}

export const formatStringToUrl = (str:string) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/ /g, "-") //substitute whitespace with dash - 
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
}

export const formatIngredient = (str:string) => {
    return str
        .toLowerCase()
        .trim()
}

