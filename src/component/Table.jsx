import React from 'react'
// import Button from './Button'

export default function Table({ tabledata }) {
    var { header, row, col } = tabledata
    // console.log()
    return (
        <div id='Tablebox'>
            <h3>{header}</h3>
            <table>
                <thead>
                    <tr>
                        {
                            row.map(row => (
                                <th key={row.rowname}>{row.rowname}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {col.map(coldata => (
                        <tr key={coldata[0].data}>
                            {
                                coldata.map(col => (
                                    
                                    <td key={col.data} className={col.classname}>{col.data}</td>
                                ))
                            }
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
