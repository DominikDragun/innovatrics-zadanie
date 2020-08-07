import React from "react";
import AppBar from '@material-ui/core/AppBar'
import { createStyles, makeStyles } from '@material-ui/core'
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles(() =>
    createStyles({
        headerStyle: {
            position: 'fixed',
            height: '65px',
            backgroundColor: useTheme().palette.primary.main
        },
        logoStyle: {
            marginTop: '5px',
            position: 'absolute',
            marginLeft: '5px',
        },
    }),
)

const Header = () => {

    const classes = useStyles()

    return (
        <AppBar className={classes.headerStyle}>
            <img
                src={'https://www.innovatrics.com/wp-content/uploads/2016/06/innovatrics_logo.svg'}
                height={'50px'}
                className={classes.logoStyle}
                alt={'Logo'}
            />
        </AppBar>

    )
}

export default Header
