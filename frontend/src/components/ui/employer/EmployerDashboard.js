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
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {totaljob} from '../../api/employerApi';

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
        <Toolbar />
        <div className={classes.paperRoot}>
          <Paper elevation={3}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            Total Job Posted
          </Grid>
          </Paper>
        </div>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
