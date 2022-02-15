import React from 'react';
import {AppBar, Typography, Toolbar, Box} from '@material-ui/core';

function Navbar (){
    return (
        <>
         <AppBar position="static" style={{backgroundColor: "#66CDAA"}}>
                <Toolbar variant="dense" >
                    <Box style={{ cursor: "pointer", color:"#FFE4E1" }} >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE4E1" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE4E1" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE4E1" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE4E1" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color:"#FFE4E1" }}>
                            <Typography variant="h6" color="inherit">
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