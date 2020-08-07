import React from 'react'
import MaterialTable from 'material-table'
import { Person } from "../../models/ConnectorModels"
import useTheme from "@material-ui/core/styles/useTheme";

interface Props {
    data: Array<Person>
}

const tableColumns = [
    {
        title: 'Name',
        field: 'name',
        sorting: false,
    },
    {
        title: 'Surname',
        field: 'surname',
        sorting: false,
    },
    {
        title: 'Date of birth',
        field: 'birth_date',
        sorting: false,
    },
    {
        title: 'Gender',
        field: 'gender',
        sorting: false,
    },
    {
        title: 'Nationality',
        field: 'nationality',
        sorting: false,
    },
]

const Table: React.FC<Props> = ({ data }: Props) => {

    return (
        <MaterialTable
            title={'Table of People'}
            columns={tableColumns}
            data={data.map( person => (
                person.attributes
            ))}
            options={{
                search: false,
                headerStyle: {
                    backgroundColor: useTheme().palette.primary.light,
                    color: '#FFF'
                }
            }}
            style={{
                margin: '75px auto auto auto',
                width: '50%',
                fontFamily: 'Arial',
                }}
        />
    )
}

export default Table
