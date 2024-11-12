import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import patientData from './PatientData.json';
import './Report.css';

const PatientReport = () => {
    const data = useMemo(() => patientData, []);

    const columns = useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Age', accessor: 'age' },
            { Header: 'Gender', accessor: 'gender' },
            { Header: 'Registration Date', accessor: 'registrationDate' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
        useSortBy,
        usePagination
    );

    return (
        
        <div className="report-container">
            <h1 className="report-header">Registered Patients</h1>
            <p>Total Patients: {data.length}</p>

            <table {...getTableProps()} className="report-table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
                <select
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                >
                    {[5, 10, 15, 20].map(size => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        
    );
};

export default PatientReport;
