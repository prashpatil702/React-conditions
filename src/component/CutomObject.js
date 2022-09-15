import React from 'react'
import Person from './Person'

function CustomObject() {

    const persons = [
        {
            id:1,
            name:'Prash',
            salary:30000
        },
        {
            id:2,
            name:'Sagar',
            salary:40000
        },
        {
            id:3,
            name:'Rohit',
            salary:50000
        }
    ]

    const objects = persons.map(p => (<Person key={p.id} p={persons} /> ))

    return (
        <div>{objects}</div>
    )

}

export default CustomObject