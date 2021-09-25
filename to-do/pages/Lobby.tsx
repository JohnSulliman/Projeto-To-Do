import { Button, Fab, Grid, Icon } from '@mui/material';
import React, { useState } from "react";
import CreateJob from './CreateJob'
import styles from '../styles/lobby.module.scss';

function clicou() {
    alert('asiydgasiukj')
}

const Lobby = () =>

<Grid className={styles.lobby}>
    <Grid className={styles.menu}><h1>aaa</h1></Grid>
    <Grid className={styles.app}><h1></h1>
        <Grid className={styles.teste}>
            <Grid className={styles.a1}>Nome</Grid>
            <Grid className={styles.a1}>Tempo de Atividade</Grid>
            <Grid className={styles.a1}>Data de Registro</Grid>
            <Grid className={styles.a1}>Status da Atividade</Grid>
            <Grid className={styles.a1}>Data de Previsão</Grid>
            <Grid className={styles.a1}>Data de Conclusão</Grid>
            <Grid className={styles.a1}>Substatus da Atividade</Grid>
        </Grid>
        <Fab onClick={clicou} className={styles.plus} color="primary" aria-label="add"></Fab>
    </Grid>
</Grid>

export default Lobby