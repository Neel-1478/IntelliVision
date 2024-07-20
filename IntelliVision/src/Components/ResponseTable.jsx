import React from 'react';
import { useTable } from 'react-table';
import style from '../Pages/IdDetections.module.css';

const ResponseTable = ({ data }) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Key',
                accessor: 'key',
            },
            {
                Header: 'Value',
                accessor: 'value',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className={style.responseContainer}>
            <table {...getTableProps()} className={style.table}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} key={column.id}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} key={cell.column.id}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ResponseTable;
