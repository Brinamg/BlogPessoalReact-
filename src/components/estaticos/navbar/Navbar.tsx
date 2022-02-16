import React from 'react';
import {AppBar, Typography, Toolbar, Box} from '@material-ui/core';
import './Navbar.css';

function Navbar (){
    return (
        <>
         <AppBar className='Navbar' position="static" style={{backgroundColor: "pointer"}}>
                <Toolbar variant="dense" >
                    <Box className='tema' style={{ cursor: "pointer", color:"inherit" }} >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box  display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer", color:"inherit" }}>
                            <Typography  variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"inherit" }}>
                            <Typography variant="h6" color="inherit" className='menue' >
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"inherit" }}>
                            <Typography variant="h6" color="inherit" className='menue' >
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"inherit" }}>
                            <Typography variant="h6" color="inherit" className='menue' >
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"inherit" }}>
                            <Typography variant="h6" color="inherit" className='menue' >
                                logout
                            </Typography>
                        </Box>
        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;