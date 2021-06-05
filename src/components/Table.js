import React, {useContext} from 'react';
import { TableDataContext } from '../Contexts/tableDataContext';


const Table = () => {
    const data = useContext(TableDataContext)
    console.log(data)

return (
    <div>
        Table
    </div>
)
}


export default Table;