import React, {useEffect,useState} from 'react';
import axios from 'axios';
import BidsTable from './Table';
import { TableDataContext } from '../Contexts/tableDataContext';

const App = () => {
    const [tableData, setTableData] = useState()

    useEffect(() => {
      
       axios.get('https://intense-tor-76305.herokuapp.com/merchants').then((response) => {
//    
     setTableData(response.data);
   })
    },[])



return (
    <TableDataContext.Provider value={tableData}>
        <BidsTable/>
        {/* <EnhancedTable /> */}
    </TableDataContext.Provider>
)
}

export default App;