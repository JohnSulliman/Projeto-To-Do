import Link from 'next/link';
import Image from 'next/image';
import {
    Button,
    Fab,
    Grid,
    Icon,
    Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import Jobs from '../components/Jobs';
import styles from '../styles/lobby.module.scss';
import { TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Select, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Teste from './teste';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import ReactDOM from 'react-dom';

function refreshPage() {
    ReactDOM.render(<Lobby />, document.getElementById('root'));
}

function reRender() {
    // calling the forceUpdate() method
    this.forceUpdate();
};

// function aaa() {
//     const [jobs, setJobs] = React.useState(undefined);

//     return(
//         <>
//             <Grid>
//                 {jobs.map(jobs => {
//                     <Jobs key={jobs.id} name={jobs.name}></Jobs>
//                 })}
//             </Grid>
//         </>
//     )
// }


function Lobby() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [age, setAge] = React.useState('');

    return (
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

                    <Fab onClick={handleClickOpen} className={styles.lobby__button}>
                        <AddIcon />
                    </Fab>

                    <Dialog open={open}>
                        <DialogTitle>Nova Atividade</DialogTitle>

                        <DialogContent>
                            <div className={styles.test}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Nome da Atividade"
                                    variant="standard"
                                    size="small" 
                                />

                                <FormControl required sx={{ m: 1, minWidth: 320 }}>
                                    <InputLabel id="demo-simple-select-required-label">
                                        Age
                                    </InputLabel>

                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Diário</MenuItem>
                                        <MenuItem value={20}>Semanal</MenuItem>
                                        <MenuItem value={30}>Mensal</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={aaa}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>

                <Button>Cancel</Button>
                <Button onClick={refreshPage}>refresh</Button>
            </Grid>
        </>
    )
}

export default Lobby