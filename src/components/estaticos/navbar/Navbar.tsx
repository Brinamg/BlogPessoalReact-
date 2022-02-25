import React from 'react';
import {AppBar, Typography, Toolbar, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';

function Navbar (){
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout(){
        setToken("")
        alert('Usuário delogado')
        history.push('/login')
    }

    return (
        <>
         <AppBar className='Navbar' position="static" style={{backgroundColor: "pointer"}}>
                <Toolbar variant="dense" >
                    <Box className='tema' >
                         <Typography variant="h5" color="inherit">
                            Gandra
                        </Typography>
                    </Box>

                    <Box  display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='menue'>
                            <Typography  variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='menue'>
                            <Typography variant="h6" color="inherit"  >
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='menue'>
                            <Typography variant="h6" color="inherit" >
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='menue'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                        
                            <Box mx={1} className='menue' onClick={goLogout}>
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