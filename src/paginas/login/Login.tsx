import React, {useState, useEffect,ChangeEvent} from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage ("token");
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        }
    )
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
        useEffect(() => {
            if(token !== ""){
                history.push('/home')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }


    return (
        <Grid container direction='row-reverse' justifyContent='center' alignItems='center' className='login'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='entrar'>Gandra</Typography>
                        <TextField className='campo' value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField className='campo' value={userLogin.senha}onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='bot'>
                                    Entrar
                             </Button>
                            
                        </Box>
                    </form>
                    <Box  display='flex' justifyContent='center' marginTop={2} className='letra'>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Link className='text-decorator-none' to='./cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='cadastro'>Cadastre-se</Typography>
                            </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='img'>
            </Grid>
            </Grid>
    );
}

export default Login;