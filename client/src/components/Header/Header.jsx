import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position = "static">
            <Toolbar className = {classes.toolbar}>
                <Typography variant = "h5" className = {classes.title}>
                    Real Estate App
                </Typography>
                <Box display = "flex">
                    <Typography variant = "h6" className = {classes.title}>
                        Log out
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;