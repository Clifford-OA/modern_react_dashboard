import React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective, Sort,
  Filter, Page, Edit, Inject, Selection, Toolbar
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid }
  from '../data/dummy';
import { Header } from '../components';


const Customers = () => {
  return (
    <div className='m-2 md:m-2 p-2 md:p-10 bg-white rounded-xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto" >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Customers