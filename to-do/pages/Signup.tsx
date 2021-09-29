import Head from 'next/head';
import { Grid,
  Typography,
  TextField, 
  Button } from '@mui/material';
import styles from '../styles/signup.module.scss';

import type { NextPage } from 'next';


const Signup: NextPage = () => {

  return (

    <>
      <Head>
        <title>To-Do Blue-EdTech / Cadastro </title>
        <meta name="description" content="Página de Cadastro da To-Do Blue-EdTech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <div className={styles.Card}>
            <Typography className={styles.Card__Tittle}>
              <h1> Cadastro </h1>
            </Typography>
            
            <form>
              <TextField 
                className={styles.Card__Input} 
                label="Nome de usuário" 
                variant="outlined" 
                size="small" />
            </form>

            <form>
              <TextField 
                className={styles.Card__Input} 
                label="E-mail" 
                variant="outlined" 
                size="small" />
            </form>

            <form>
              <TextField 
                className={styles.Card__Input} 
                label="Senha" 
                variant="outlined" 
                type="password"
                size="small" />
            </form>

            <form>
              <TextField 
                className={styles.Card__Input} 
                label="Confirmar Senha" 
                variant="outlined" 
                type="password"
                size="small" />
            </form>

            <Button 
              className={styles.Card__Button} 
              variant="contained" 
              size="small" > 
              Cadastrar 
            </Button>

            <Typography>
              <small> Já possui uma conta? <a href="/">Entrar!</a> </small>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Signup