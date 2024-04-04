import React from 'react';

const Table = () => {
    const data = [
        {firstName:"John",lastName:"Doe"},
        {firstName:"Jane",lastName:"Doe"},
        {firstName:"Jim",lastName:"Brown"},
        {firstName:"Jill",lastName:"Smith"},
        {firstName:"Jake",lastName:"White"}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                </tr>
            </thead>
            <tbody>
                {data.map((person, index) => (
                    <tr key={index}>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;