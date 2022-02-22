import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';


function Home(){
    return (
    <>
    <Grid className='Home' container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid  className='vidro' alignItems="center" item xs={6}>
                    <Box  paddingX={10} >
                        <Typography className='texto1' variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold", fontFamily: "Montserrat" }}>Seja bem vinda(o)!</Typography>
                        <Typography className='texto2' variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold", fontFamily: "Montserrat" }}>Compartilhe suas ideias e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button className='botao' variant="outlined">Ver Postagens</Button>
                    </Box>
                </Grid>
              
                <Grid xs={12} className='postagens'></Grid>
                <TabPostagem/>
                </Grid>   
    </>
    );
}
export default Home;