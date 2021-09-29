import { Button, Grid } from '@mui/material';
import React from 'react';
import styles from '../styles/createJob.module.scss';
import { TextField } from '@mui/material';

const CreateJob = () =>

<Grid className={styles.window}>
    <p>Nova Atividade</p>
    <br></br>
    <br></br>
    <TextField className={styles.textField} id="outlined-basic" label="Nome da Atividade" variant="outlined" size="small" style={{width: '80%'}} />
    <br></br>
    <TextField className={styles.textField} id="outlined-basic" label="Tempo da Atividade" variant="outlined" size="small" style={{width: '80%'}}/>
    <br></br>
    <Button variant="contained">Contained</Button>    
</Grid>

export default CreateJob