import React from 'react';
import { AppBar, Typography, Toolbar, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert('Usuário delogado')
        history.push('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent =  <AppBar className='Navbar' position="static" style={{ backgroundColor: "pointer" }}>
        <Toolbar variant="dense" >
            <Box className='tema' >
                <Typography variant="h5" color="inherit">
                    Gandra
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='menue'>
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                </Link>
                <Link to="/postagens" className="text-decorator-none">
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
    }

    return (
        <>
           {navbarComponent}
        </>
    )
}
export default Navbar;

