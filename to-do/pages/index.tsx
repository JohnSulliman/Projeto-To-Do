import Head from 'next/head';
import { useRouter } from 'next/router';
import { Grid,
  Typography,
  TextField, 
  Button } from '@mui/material';
import styles from '../styles/index.module.scss';

import type { NextPage } from 'next';
import Lobby from './Lobby';
import CreateJob from '../components/CreateJob';


function Login() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>To-Do Blue-EdTech / Login </title>
        <meta name="description" content="Página de Login da To-Do Blue-EdTech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <div className={styles.card}>
            <Typography className={styles.card__title}>
              <h1> To-Do Blue-EdTech </h1>
            </Typography>
            
            <form>
              <TextField 
                className={styles.card__input} 
                label="Usuário" 
                variant="outlined" 
                size="small" />
            </form>

            <form>
              <TextField 
                className={styles.card__input} 
                label="Senha" 
                variant="outlined" 
                type="password"
                size="small" />
            </form>
            
            <Button 
              className={styles.card__button} 
              variant="contained" 
              size="small" 
              onClick={() => router.push('/Lobby')}> 
              Entrar 
            </Button>

            <Typography>
              <small> Não possui uma conta? <a href="/Signup">Cadastre-se!</a> </small>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
