import Head from 'next/head'
import { Grid,
  Typography,
  TextField, 
  Button } from '@mui/material'
import styles from '../styles/index.module.scss'

import type { NextPage } from 'next'

const Login: NextPage = () => {

  return (
    <>
      <Head>
        <title>To-Do Blue-EdTech /Login </title>
        <meta name="description" content="Página de Login da To-Do Blue-EdTech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <div className={styles.Card}>
            <Typography className={styles.Card__Tittle}>
              <h1> To-Do Blue-EdTech </h1>
            </Typography>
            
            <form>
              <TextField 
                className={styles.Card__Input} 
                label="Usuário" 
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

            <Button 
              className={styles.Card__Button} 
              variant="contained" 
              size="small" > 
              Entrar 
            </Button>

            <Typography>
              <small> Não possui uma conta? <a href="/">Cadastre-se!</a> </small>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
