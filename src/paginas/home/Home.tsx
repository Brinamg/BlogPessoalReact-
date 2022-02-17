import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';


function Home(){
    return (
    <>
    <Grid className='Home' container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={10} >
                        <Typography className='texto1' variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold", fontFamily: "Montserrat" }}>Seja bem vinde!</Typography>
                        <Typography className='texto2' variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold", fontFamily: "Montserrat" }}>Compartilhe suas ideias e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button className='botao' variant="outlined">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} className='imagem'>
                    <img src="https://cdn.pixabay.com/photo/2017/02/01/09/31/arrows-2029160_960_720.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'></Grid>
                </Grid>   
    </>
    );
}
export default Home;