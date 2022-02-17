import React from 'react';
import {AppBar, Typography, Toolbar, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar (){
    return (
        <>
         <AppBar className='Navbar' position="static" style={{backgroundColor: "pointer"}}>
                <Toolbar variant="dense" >
                    <Box className='tema' >
                        <Typography variant="h5" color="inherit">
                            PONO
                        </Typography>
                    </Box>

                    <Box  display="flex" justifyContent="start">
                        <Box mx={1} className='menue'>
                            <Typography  variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className='menue'>
                            <Typography variant="h6" color="inherit"  >
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='menue'>
                            <Typography variant="h6" color="inherit" >
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='menue'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decoretor-none'>
                            <Box mx={1} className='menue'>
                                <Typography variant="h6" color="inherit">
                                logout
                                </Typography>
                            </Box>
                        </Link>
        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;