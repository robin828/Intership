import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import logo from '../../assets/logo.svg'

    function ElevationScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 0,
          target: window ? window() : undefined,
        });
      
        return React.cloneElement(children, {
          elevation: trigger ? 4 : 0,
        });
      }


      const useStyle = makeStyles(theme=>({
          toolbarMargin: {
              ...theme.mixins.toolbar,
              marginBottom: "3em",
              [theme.breakpoints.down("md")]: {
                marginBottom: "2em"
            },
            [theme.breakpoints.down("xs")]: {
                marginBottom: "1.5em"
            }
          },
          logo: { 
              height: "8em",
              [theme.breakpoints.down("md")]: {
                height: "7em"
            },
            [theme.breakpoints.down("xs")]: {
                height: "5.5em",
            }
          },
          
          logoContainer: {
              padding: 0,
              "&:hover": {
                  backgroundColor: "transparent"
              }
          },
          tabContainer: {
              marginLeft: "auto"
          },
          tab: {
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft: "25px"
          },
          button: {
            ...theme.typography.estimate,
              borderRadius: "50px",
              marginLeft: "50px",
              marginRight: "25px",
              height: "45px",
              "&:hover": {
                backgroundColor: theme.palette.secondary.light
            }
          },
          menu: {
              backgroundColor: theme.palette.common.blue,
              color: "white"
          },
          menuItem: {
              ...theme.typography.tab,
              opacity: 0.7,
              "&:hover": {
                opacity: 1
              }
          },
          drawer: {
            marginLeft: "auto",
              "&:hover": {          
                  backgroundColor: "transparent"
              },
          },
          drawerSize: {
              height :"50px",
              width: "50px"
          },
          styleDrawer: {
              backgroundColor: theme.palette.common.blue,
          },
          drawerItem: {
              ...theme.typography.tab,
              Color: "White"
          },
          drawerItemEstimate: {
              backgroundColor: theme.palette.common.orange,
              "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
          }

      }))

    export default function Header(props){
        const classes = useStyle()
        const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.down("md"))
        const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


        const [openDrawer, setOpenDrawer] = React.useState(false)
        
        const [anchorEl, setAnchorEl] = React.useState(null)
        const [openMenu, setOpenMenu] = React.useState(false)
        

        const handleChange = (e, newValue)=> {
            props.setValue(newValue)
        }
        const handleClick = (event) => {
            setAnchorEl(event.target);
            setOpenMenu(true)
            props.setValue(1)
          };
          const handleClose = () => {
            setAnchorEl(null);
            setOpenMenu(false)
            props.setValue(1)
          };

          const handleMenuItemCLick = (e, i) => {
            setAnchorEl(null);
            setOpenMenu(false);
            props.setSelectedIndex(i);
          }

          const menuOptions =[
            {name:"Registraion",link:"/registration"},
            {name: "employer Registration",link: "/employer"},
            {name: "Candidate Registration", link: "/candidate"}
        ]

        React.useEffect(()=>{
            if(window.location.pathname === "/" && props.value !== 0){
                props.setValue(0)
            }
            if(window.location.pathname === "/registration" && props.value !== 1){
                props.setValue(1)
                props.setSelectedIndex(0)
            }
            if(window.location.pathname === "/login" && props.value !== 2){
                props.setValue(2)
            }
            if(window.location.pathname === "/about" && props.value !== 3){
                props.setValue(3)
            }
            if(window.location.pathname === "/contact" && props.value !== 4){
                props.setValue(4)
            }
            if(window.location.pathname === "/employer" && props.value !== 1){
                props.setValue(1)
                props.setSelectedIndex(1)
            }
            if(window.location.pathname === "/candidate" && props.value !== 1){
                props.setValue(1)
                props.setSelectedIndex(2)
            }

        },[props, props.value])
        const tabs = (
            <>
                <Tabs 
                    value={props.value} 
                    onChange={handleChange}
                    className={classes.tabContainer}
                    indicatorColor="primary"
                >
                    <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                    <Tab 
                        className={classes.tab} 
                        component={Link} to="/registration" 
                        label="Registration"
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup={anchorEl ? "true" :undefined}
                        onMouseOver={event => handleClick(event)}
                    />
                    <Tab className={classes.tab} component={Link} to="/login" label="Login"/>
                    <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
                    <Tab className={classes.tab} component={Link} to="/contact" label="Contact  Us"/>
                </Tabs>
                <Menu id="simple-menu" 
                anchorEl={anchorEl} open={openMenu}
                onClose={handleClose} 
                MenuListProps={{onMouseLeave: handleClose}}
                classes={{paper: classes.menu}}
                elevation={0}
                >
                    {menuOptions.map((options, i)=>(
                        <MenuItem to={options.link} key={options} component={Link} selected={i===props.selectedIndex && props.value===1} 
                        classes={{root: classes.menuItem}} 
                        onClick={(event)=>{handleMenuItemCLick(event, i); props.setValue(1); handleClose()}}
                        >
                            {options.name}
                        </MenuItem>
                    ))}
                </Menu>
            </>
        )
        const drawer = (
            <>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} 
            onOpen={()=>setOpenDrawer(true)}  open={openDrawer} onClose={()=>setOpenDrawer(false)}
            classes={{paper: classes.styleDrawer}}>
                <List disablePadding>
                    <ListItem onClick={()=>{setOpenDrawer(false); props.setValue(0)}} divider button component={Link} to="/" selected={props.value === 0 }>
                        <ListItemText className={classes.drawerItem}>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false); props.setValue(1)}} divider button component={Link} to="/registration" selected={props.value === 1 }>
                        <ListItemText className={classes.drawerItem}>Registration</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false); props.setValue(2)}} divider button component={Link} to="/login" selected={props.value === 2 }>
                        <ListItemText className={classes.drawerItem}>Login</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false); props.setValue(3)}} divider button component={Link} to="/about" selected={props.value === 3 }>
                        <ListItemText className={classes.drawerItem}>About Us</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{setOpenDrawer(false); props.setValue(4)}} divider button component={Link} to="/contact" selected={props.value === 4 }>
                        <ListItemText className={classes.drawerItem}>Contact Us</ListItemText>
                    </ListItem>
                </List>
                </SwipeableDrawer>
                <IconButton onClick={()=>setOpenDrawer(!openDrawer)} disableRipple className={classes.drawer}>
                    <MenuIcon className={classes.drawerSize}/>
                </IconButton>
            </>
        )

        return (
        <>
        <ElevationScroll {...props}>
        <AppBar position="fixed">
            <ToolBar disableGutters>
                <Button component={Link} to="/" className={classes.logoContainer}
                onClick={()=>props.setValue(0)} disableRipple>
                <img className={classes.logo} src={logo} alt="Company Logo"/>
                </Button>
                {matches ? drawer : tabs}
                
            </ToolBar>
        </AppBar>
        
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </>
    )
}