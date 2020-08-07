import axios from 'axios'
import {Person} from "../models/ConnectorModels";

// asynchronna funkcia pre ziskanie dat z BE cez API
export const getPeople = async (): Promise<Array<Person>> => {
    return (
        axios
            .get('/api/person.json')
            .then(res => res.data.data)
            .catch(err => console.log(err))
    )
}