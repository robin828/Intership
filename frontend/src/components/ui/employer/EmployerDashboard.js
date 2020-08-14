import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {totaljob} from '../../api/employerApi';
import EmployerProfile from '../employer/EmployerProfile';
import PostJob from '../employer/PostJob';
import PostedJob from '../employer/PostedJob';
import JobStatus from '../employer/JobStatus';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paperRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(55),
      height: theme.spacing(25),
    },
  },
}));

export default function EmployerDasboard() {
  const classes = useStyles();

  const [totalJobs, setTotalJobs] = useState("")
  useEffect(()=>{
    const fetchApi = async () => {
      const jobs = await totaljob();
      setTotalJobs(jobs)
    }
    fetchApi()
  }, [])
  console.log(totalJobs)

  if(window.location.pathname==="/employer/dashboard" || "http://localhost:3000/"){
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Employer Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Link style={{textDecoration: "None"}}>
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                        <ListItemText >
                          Dashboard
                        </ListItemText>
                </ListItem>
                </Link>
                <Link to="/employer/profile" style={{textDecoration: "None"}}>
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                        <ListItemText >
                          Profile
                        </ListItemText>
                </ListItem>
                </Link>
                <Link to="/postjob" style={{textDecoration: "None"}}>
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                        <ListItemText >
                          Post Job
                        </ListItemText>
                </ListItem>
                </Link>
                <Link to='/postedjobs' style={{textDecoration: "None"}}>
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                        <ListItemText >
                          Posted Jobs
                        </ListItemText>
                </ListItem>
                </Link>
                <Link to="/jobstatus" style={{textDecoration: "None"}}>
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                        <ListItemText >
                          See Job Status
                        </ListItemText>
                </ListItem>
                </Link>
                <List />
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText >
                            Take Interview
                        </ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText >Assign Work</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText >Review Work</ListItemText>
                    </ListItem>
                </List>
              
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          {

            (window.location.pathname === "/employer/profile") ?  <EmployerProfile /> :
              
            (window.location.pathname === "/postjob") ?  <PostJob /> :
            
            (window.location.pathname === "/postedjobs") ? <PostedJob /> :
            
            (window.location.pathname === "/jobstatus") ? <JobStatus /> : null
              
          }
        </main>
      </div>
    );
    }

    
}
