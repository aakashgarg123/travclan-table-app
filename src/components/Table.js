import React, {useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { TableDataContext } from '../Contexts/tableDataContext';
import useTable from './useTable';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    customImage: {
        width:'30px',
        height: '30px',
        borderRadius: '25px'
    }
}))

const headCells = [
    { id: 'customerName', label: 'Customer Name' },
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone' },
    { id: 'premium', label: 'Premium', disableSorting: true },
    { id: 'bid', label: 'Bid',disableSorting: false},
]



const BidsTable = () => {
    const classes = useStyles();
    const data = useContext(TableDataContext)

    const [records, setRecords] = useState()

    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const [isMin, setIsMin] = React.useState(false);

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);
    

    React.useEffect(() => {
        setRecords(data)
    },[data])


    const maxBid = (arr) => {
        let newArr = [];
        for(let i = 0 ; i < arr.length; i++){
            newArr.push(arr[i].amount)
        }
        return Math.max(...newArr);
    }
    const minBid = (arr) => {
        let newArr = [];
        for(let i = 0 ; i < arr.length; i++){
            newArr.push(arr[i].amount)
        }
        return Math.min(...newArr);
    }
    const handleChange = (event) => {
        setIsMin(!isMin);
      };

return (
    <React.Fragment>
        {records && (
    <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <Toolbar>
                    
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell><img className={classes.customImage} src={item.avatarUrl} />{item.firstname + " " + item.lastname}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.hasPremium.toString()}</TableCell>
                                    <TableCell>{item.bids.length > 0 && !isMin ? maxBid(item.bids): (item.bids.length > 0 && isMin ? minBid(item.bids) : 0)}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
                {/* <Switch
                    checked={isMin}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}>SEE MIN BIDS?</Switch> */}
                    <FormControlLabel control={<Switch checked={isMin}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }} />} label="SEE MIN BIDS?" />
            </Paper>
           
            )}
    </React.Fragment>
)
}


export default BidsTable;