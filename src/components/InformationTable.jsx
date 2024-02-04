import React from 'react'

const InformationTable = ({ entries }) => {
    return (
        <table className='informationTable'>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.firstName}</td>
                        <td>{entry.lastName}</td>
                        <td>{entry.phone}</td>
                    </tr>
                ))}
            </tbody>



        </table>
    )
}

export default InformationTable