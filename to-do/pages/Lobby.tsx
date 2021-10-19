import Image from 'next/image';
import { useRouter } from 'next/router';
import {
    Button,
    Fab,
    Grid,
    Typography,
    TextField, 
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogTitle,
    Select,
    MenuItem,
    FormControl,
    InputLabel
        } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import {get} from '../api/axios';
import styles from '../styles/lobby.module.scss';
import { CodeSharp } from '@mui/icons-material';


function Lobby() {
    const [openTask, setOpenTask] = React.useState(false);
    const [openLogout, setOpenLogout] = React.useState(false);
    const [age, setAge] = React.useState('');

    const router = useRouter();

    const handleOpenTask = () => {
        setOpenTask(true);
    };

    const handleCloseTask = () => {
        setOpenTask(false);
    };

    const handleOpenLogout = () => {
        setOpenLogout(true);
    };

    const handleCloseLogout = () => {
        setOpenLogout(false);
    };

    const handleChange = (event: any) => {
        setAge(event.target.value);
    };

    const logout = async (event: any) => {
        event.preventDefault();
        localStorage.removeItem("token");
        router.push("/");
    
    };

    const [user, setUser] = React.useState("");

    React.useEffect(() => {
        if (!user) {
            get().then((res:any) => setUser(res));
        }
    }, [user]);

    const responseData = Array.from(user);

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
                        {responseData.map((data:any) => (
                            <span key={data.id}>{data.userName}</span>
                        ))}
                    </Typography>

                    <Typography className={styles.lobby__menu__None}>
                        <span>Configurações</span>
                    </Typography>

                    <Typography className={styles.lobby__menu__config}>
                        <a onClick={handleOpenLogout} className={styles.lobby__logout}>Sair</a>
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

                    <Fab onClick={handleOpenTask} className={styles.lobby__button}>
                        <AddIcon />
                    </Fab>

                    <Dialog open={openTask}>
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
                            <Button onClick={handleCloseTask}>Cancel</Button>
                            <Button>Subscribe</Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog open={openLogout}>
                        <DialogTitle>Logout</DialogTitle>

                        <DialogContent>
                            <Typography>
                                Deseja sair da conta?
                            </Typography>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleCloseLogout}>Cancelar</Button>
                            <Button onClick={logout}>Sair</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
        </>
    )
}

export default Lobby