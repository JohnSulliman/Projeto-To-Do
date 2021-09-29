import Link from 'next/link';
import Image from 'next/image';
import { 
    Button, 
    Fab, 
    Grid, 
    Icon, 
    Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import CreateJob from '../components/CreateJob';
import styles from '../styles/lobby.module.scss';
import { TextField } from '@mui/material';

function clicou() {
    alert('Criar tarefa')
function chama() {
    return (
        <Grid>
            <CreateJob></CreateJob>
        </Grid>
    )  
}

function Lobby() {

    return(
        <>
            <Grid container className={styles.lobby}>
                <Grid item className={styles.lobby__menu}>
                    <Grid item>
                        <Image 
                            priority
                            className={styles.lobby__menu__image}
                            src="/images/perfil00.png"
                            height={144}
                            width={144}
                        />
                    </Grid>

                    <Typography className={styles.lobby__menu__title}>
                        <span>Nome do Usuário</span>
                    </Typography>

                    <Typography className={styles.lobby__menu__None}>
                        <span>Configurações</span>
                    </Typography>

                    <Typography className={styles.lobby__menu__config}>
                        <Link href="/">
                            <a className={styles.lobby__logout}>Sair</a>
                        </Link>
                    </Typography>
                </Grid>

                <Grid item className={styles.lobby__body}>
                    <Grid item className={styles.lobby__head}>
                        <span className={styles.lobby__head__title}>Nome</span>
                        <span className={styles.lobby__head__title}>Tempo de Atividade</span>
                        <span className={styles.lobby__head__title}>Data de Registro</span>
                        <span className={styles.lobby__head__title}>Status</span>
                        <span className={styles.lobby__head__title}>Data de Previsão</span>
                        <span className={styles.lobby__head__title}>Data de Conclusão</span>
                        <span className={styles.lobby__head__title}>Substatus</span>
                    </Grid>
                    <Fab onClick={clicou} className={styles.lobby__button}>
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
        </>
    )
}

export default Lobby