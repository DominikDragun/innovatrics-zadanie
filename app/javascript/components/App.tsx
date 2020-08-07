import React, { useEffect, useState } from 'react'
import {getPeople} from '../connectors/connector'
import Table from "./Table"
import {Person} from "../models/ConnectorModels"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Header from "./Header"

// nastavenie farieb
const theme = createMuiTheme({
    palette: {
        primary: { main: '#112d54', light: '#224e8c', contrastText: 'white' },
    },
})

const App = () => {
    const [personList, setPersonList] = useState<Person[]>([])

    useEffect(() => {
        getPeople().then(res => setPersonList(res))
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Table data={personList}/>
        </ThemeProvider>
    )
}

export default App
