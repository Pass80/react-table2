import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter, numberFilter, dateFilter, Comparator } from 'react-bootstrap-table2-filter';

const SortedTable = () => {

    function priceFormatter(column, colIndex, { sortElement, filterElement }) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {filterElement}
                {column.text}
                {sortElement}
            </div>
        );
    }

    const products = [
        { id: 1, name: 'Product A', price: 10.99, origin: 'Syria' },
        { id: 2, name: 'Product B', price: 5.99, origin: 'Germany' },
        { id: 3, name: 'Product C', price: 7.99, origin: 'Holand' },
        { id: 4, name: 'Product D', price: 10.99, origin: 'France' },
        { id: 5, name: 'Product E', price: 15.99, origin: 'USA' },
        { id: 6, name: 'Product F', price: 37.99, origin: 'China' },

    ];

    const columns =
        [{ dataField: 'id', text: 'Product ID' }, { dataField: 'name', text: ' Product name', filter: numberFilter(), dtatfield: 'inStockDate', text: 'InStock Date', filter: dateFilter(), defaultValue: { date: new Date(2020, 0, 1), comparator: Comparator.GT } },
        {
            dataField: 'price',
            text: 'Product Price',
            sort: true,
            filter: textFilter(),
            headerFormatter: priceFormatter
        }, { dataField: 'origin', text: 'Product origin' },];
    return (
        <BootstrapTable
            style={{ border: '1px solid black', backgroundColor: 'green' }}
            keyField="id"
            data={products}
            columns={columns}
            filter={filterFactory()}

        />
    )
}

export default SortedTable


// ...


