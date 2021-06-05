import React, {useEffect,useState} from 'react';
import axios from 'axios';
import BidsTable from './Table';
import { TableDataContext } from '../Contexts/tableDataContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


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
        <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h5" color="inherit">
            Made with &#10084;&#65039; for TravClan
          </Typography>
        </Toolbar>
      </AppBar>

      
      <div>
        <BidsTable/>
        </div>
        
    </TableDataContext.Provider>
)
}

export default App;