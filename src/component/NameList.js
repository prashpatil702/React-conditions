import React from 'react'

function NameList()
{
    const names = ['Prashant','Laxman','Patil']
    const name = names.map(name => <h1>{name}</h1>)
    return(
        <div>{name}</div>
    )
}
export default NameList