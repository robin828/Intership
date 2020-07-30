import React from 'react'
import {makeStyles} from '@material-ui/styles'

import Grid from '@material-ui/core/grid'
import Hidden from '@material-ui/core/Hidden'
import {Link} from 'react-router-dom'
const useStyles = makeStyles(theme=>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "23em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "19em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        },
    },
    mainContainer: {
        position: "absolute"

    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    grid: {
        margin: "3em"
    },
    Icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            width: "2.5em",
            height: "2.5em",
            right: ".5em"
        },
        [theme.breakpoints.down("md")]: {
            width: "3.5em",
            height: "3.5em",
            right: ".5em"
        },
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em"

    }
    
}))

const Footer = (props) => {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer}>
                <Hidden mdDown>
                    <Grid container justify="center" className={classes.mainContainer}>
                        <Grid item className={classes.grid}>
                            <Grid container direction="column">
                                <Grid item component={Link} to="/" onClick={() => props.setValue(0)} className={classes.link}>Home</Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.grid}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1);props.setSelectedIndex(0)}} to="/services">Services</Grid>
                            
                            
                                <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1);props.setSelectedIndex(1)}} to="/customsoftware">Custom Software</Grid>
                            
                            
                                <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1);props.setSelectedIndex(2)}} to="/mobileapps">App Development</Grid>
                            
                            
                                <Grid item className={classes.link} component={Link} onClick={() => {props.setValue(1);props.setSelectedIndex(3)}} to="/websites">Web Development</Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.grid}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} to="/revolution">The Revolution</Grid>
                            
                            
                                <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} to="/revolution">Vision</Grid>
                            
                            
                                <Grid item className={classes.link} component={Link} onClick={() => props.setValue(2)} to="/revolution">Technology</Grid>
                            
                            
                                <Grid item className={classes.link }component={Link} onClick={() => props.setValue(2)} to="/revolution">Process</Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.grid}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} to="/about">About Us</Grid>
                            
                            
                                <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} to="/about">History</Grid>
                            
                            
                                <Grid item className={classes.link} component={Link} onClick={() => props.setValue(3)} to="/about">Team</Grid>
                                </Grid>
                        </Grid>
                        <Grid item className={classes.grid}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item className={classes.link} component={Link} onClick={() => props.setValue(4)} to="/contact">Contact Us</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                

                
            </footer>
        </div>
    )
}
export default Footer
