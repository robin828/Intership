import React, {useState, useEffect} from 'react'
import {postedjob} from '../../api/employerApi'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 1000,
    },
    table1: {
        minWidth: 1000,
        justify: "center"
    }
  });

  
const PostedJob = () => {
    const [jobs, setJobs] = useState({});
    const classes = useStyles();

    useEffect(()=>{
        const fetchApi = async () => {
            await setJobs(postedjob);
        }
        fetchApi();
    }, [])
    console.log(jobs);
    console.log("jobs");
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
        return (
        <div >
            <CssBaseline />
            <Container maxWidth="sm">
            <Grid
                container
                direction="row"
                justify="center"
            >
                <Typography variant="h2" text-align="center">
                    Posted Jobs
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
            >
            <TableContainer component={Paper} className={classes.table1}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                ki
              </TableCell>
              <TableCell align="right">Hi</TableCell>
              <TableCell align="right">hi</TableCell>
              <TableCell align="right">ki</TableCell>
              <TableCell align="right">ji</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
            </Container>
        </div>
    )
}

export default PostedJob
