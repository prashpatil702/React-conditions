import React from 'react'

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

    const objects = persons.map(p =><h1>{p.salary}</h1> )

    return (
        <div>{objects}</div>
    )

}

export default CustomObject