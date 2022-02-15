import React from 'react';
import {Typography, Box, Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer (){
    return (
        <>
         <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#CD5C5C", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "#FFE4E1" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.instagram.com/sabrinahmg/?hl=pt-br" target="#FFE4E1">
                                <InstagramIcon style={{ fontSize: 60, color: "#FFE4E1" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/sabrinamouragandra/" target="#FFE4E1">
                                <LinkedInIcon style={{ fontSize: 60, color: "#FFE4E1" }} />
                            </a>
                            <a href="https://github.com/Brinamg" target="#FFE4E1">
                                <GitHubIcon style={{ fontSize: 52, color: "	#FFE4E1" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#66CDAA", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href=" ">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Footer;