import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const products = [
    { id: 1, name: 'Product A', price: 10.99, origin: 'Syria' },
    { id: 2, name: 'Product B', price: 5.99, origin: 'Germany' },
    { id: 3, name: 'Product C', price: 7.99, origin: 'Holand' },
    { id: 4, name: 'Product D', price: 10.99, origin: 'France' },
    { id: 5, name: 'Product E', price: 15.99, origin: 'USA' },
    { id: 6, name: 'Product F', price: 37.99, origin: 'China' },

];

function rankFormatter(cell, row, rowIndex, formatExtraData) {
    return (
        <i className='glyphicon glyphicon-chevron-up' />


    );
}

const columns = [{ dataField: 'id', text: 'Product ID' }, { dataField: 'name', text: ' Product name' }, { dataField: 'origin', text: 'Product origin' }, {
    dataField: 'rank',
    text: 'Rank',
    formatter: rankFormatter,
    formatExtraData: {
        up: 'glyphicon glyphicon-chevron-up',
        down: 'glyphicon glyphicon-chevron-down'
    }
}]



const rowStyle2 = (row, rowIndex) => {
    const style = {};
    if (row.id > 3) {
        style.backgroundColor = '#c8e6c9';
    } else {
        style.backgroundColor = '#00BFFF';
    }

    if (rowIndex > 2) {
        style.fontWeight = 'bold';
        style.color = 'white';
    }

    return style;
};

const hiddenRows = [6, 3]

const rowEvents = {
    onClick: (e, row, rowIndex) => {
        console.log('you have cliked the' + rowIndex)
    },

    onMouseEnter: (e, row, rowIndex) => {
        console.log(`you have entered the ${rowIndex}`)
    }
}







const Table = () => {
    return (
        <BootstrapTable keyField='id' data={products} columns={columns} rowStyle={rowStyle2} hiddenRows={hiddenRows} rowEvents={rowEvents} />
    )
}







export default Table