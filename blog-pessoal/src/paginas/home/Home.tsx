import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';


function Home(){
    return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "	#C0C0C0" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#708090", fontWeight: "bold" }}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#708090", fontWeight: "bold" }}>Compartilhe suas ideias e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#2E8B57", color: "#ffffff" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.pixabay.com/photo/2018/04/15/19/23/neural-network-3322580_960_720.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>     
    </>
    );
}
export default Home;