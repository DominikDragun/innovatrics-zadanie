// objekt posielany z BE na frontend cez API

export type PersonData = {
    name: string,
    surname: string,
    birth_date: string,
    gender: string,
    nationality: string
}

export type Person = {
    attributes: PersonData,
    id: string,
    type: string
}