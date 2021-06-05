import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Table from './Table';
import { TableDataContext } from '../Contexts/tableDataContext';




const App = () => {
    const [tableData, setTableData] = useState()

    useEffect(() => {
        axios.get('https://intense-tor-76305.herokuapp.com/merchants').then((response) => {
    // handle success
        setTableData(response.data);
  })
    },[])
return (
    <TableDataContext.Provider value={tableData}>
        <Table/>
    </TableDataContext.Provider>
)
}

export default App;