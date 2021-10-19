import React from "react";
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
    MenuItem
    // Select,
    // MenuItem,
    // FormControl,
    // InputLabel
        } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tasks from '../components/Tasks'
import { getUser } from '../api/axios';
import { postTasks } from '../api/axios';
import styles from '../styles/lobby.module.scss';


function Lobby() {
    const [user, setUser] = React.useState("");
    const [openLogout, setOpenLogout] = React.useState(false);
    const [openTask, setOpenTask] = React.useState(false);
    const [taskName, setTaskName] = React.useState("");
    const [taskDate, setTaskDate] = React.useState("");
    const [priority, setPriority] = React.useState(0);
    const [error, setError] = React.useState(false);
    console.log(taskName)
    console.log(taskDate)
    console.log(priority)

    const router = useRouter();

    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };

    const handleOpenTask = () => {
        setOpenTask(true);
    };

    const handleCloseTask = () => {
        setOpenTask(false);
    };

    const options = [
        {
            value: 1,
            label: "Baixa",
        },
        {
            value: 2,
            label: "Média",
        },
        {
            value: 3,
            label: "Alta",
        }
    ]

    const submitHandler = async (event:any) => {
        event.preventDefault();
    
        try {
          await postTasks(taskName, taskDate, priority)
          console.log("0")
        } catch (error) {
          setError(true);
          console.log("1")
        };
     
    };
        
    const handleOpenLogout = () => {
        setOpenLogout(true);
    };
    
    const handleCloseLogout = () => {
        setOpenLogout(false);
    };

    const logout = async (event: any) => {
        event.preventDefault();
        localStorage.removeItem("token");
        router.push("/");
    
    };

    React.useEffect(() => {
        if (!user) {
            getUser().then((res:any) => setUser(res));
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

                <Tasks/>

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

                <Fab
                    onClick={handleOpenTask}
                    style={fabStyle}
                    color="primary" 
                    aria-label="add" >
                        <AddIcon />
                </Fab>

                <Dialog open={openTask} className={styles.lobby__cardTask}>
                    <DialogTitle>Nova Atividade</DialogTitle>

                    <DialogContent>
                        <form onSubmit={submitHandler}>
                            <Grid className={styles.lobby__cardTask__info}>
                                <TextField
                                    className={styles.lobby__cardTask__input}
                                    label="Nome da Atividade"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => setTaskName(e.target.value)}
                                    fullWidth 
                                />

                                <TextField
                                    className={styles.lobby__cardTask__input}
                                    type="date"
                                    variant="outlined"
                                    size="small" 
                                    onChange={(e) => setTaskDate(e.target.value)}
                                    fullWidth
                                />

                                <TextField
                                    className={styles.lobby__cardTask__input}
                                    label="Prioridade"
                                    variant="outlined"
                                    size="small" 
                                    onChange={(e) => setPriority(Number(e.target.value))}
                                    select
                                    value={priority}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    fullWidth
                                >
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>

                            <DialogActions>
                                <Button onClick={handleCloseTask}>Cancel</Button>
                                <Button type="submit" onClick={handleCloseTask}>Subscribe</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>

                </Dialog>
            </Grid>
        </>
    )
};

export default Lobby