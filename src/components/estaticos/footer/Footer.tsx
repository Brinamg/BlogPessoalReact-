import React from 'react';
import {Typography, Box, Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';

function Footer (){
    return (
        <>
         <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='redes' style={{ backgroundColor: "#303F9F", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color:"white" }} className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box className='logo' display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/sabrinahmg"target="_blank" rel="noreferrer" >
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} className='logo'/>
                            </a>
                            <a href="https://www.linkedin.com/in/sabrinamouragandra" target="_blank" rel="noreferrer" >
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} className='logo'/>
                            </a>
                            <a href="https://github.com/Brinamg" target="_blank" rel="noreferrer" >
                                <GitHubIcon style={{ fontSize: 60, color: "white" }}className='logog' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='rodape'>
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