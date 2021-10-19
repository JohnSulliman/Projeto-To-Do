import Head from 'next/head';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Grid,
  Typography,
  TextField, 
  Button 
    } from '@mui/material';
import {register} from '../api/axios';
import styles from '../styles/signup.module.scss';


const Signup: NextPage = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificPassword, setVerificPassword] = useState('');
  const [error, setError] = useState(false);
  
  const router = useRouter();

  const submitHandler = async (event:any) => {
    event.preventDefault();

    try {
      await register(userName, email, password)
      router.push('/');
    } catch (error) {
      setError(true);
    };

  };

  return (

    <>
      <Head>
        <title>To-Do Blue-EdTech / Cadastro </title>
        <meta name="description" content="Página de Cadastro da To-Do Blue-EdTech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={submitHandler}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <div className={styles.card}>
                <Typography className={styles.card__tittle}>
                  <h1> Cadastro </h1>
                </Typography>
                
                <TextField 
                  className={styles.card__input} 
                  label="Nome de usuário" 
                  variant="outlined" 
                  size="small" 
                  onChange={(e) => setUserName(e.target.value)}/>

                <TextField 
                  className={styles.card__input} 
                  label="E-mail" 
                  variant="outlined" 
                  size="small" 
                  onChange={(e) => setEmail(e.target.value)}/>

                <TextField 
                  className={styles.card__input} 
                  label="Senha" 
                  variant="outlined" 
                  type="password"
                  size="small" 
                  onChange={(e) => setPassword(e.target.value)}/>

                <TextField 
                  className={styles.card__input} 
                  label="Confirmar Senha" 
                  variant="outlined" 
                  type="password"
                  size="small"
                  onChange={(e) => setVerificPassword(e.target.value)}/>

                {
                  password === verificPassword ? "" 
                    : 
                  <>
                    <small className={styles.card__error}>*Senha errada! Verifique sua senha.</small>
                  </>
                }
                
                <small>A senha deve conter:</small>
                <small>Caracter especial;</small>
                <small>Letra maiúscula;</small>
                <small>Número;</small>

                <Button 
                  className={styles.card__button} 
                  variant="contained" 
                  size="small" 
                  type="submit"> 
                  Cadastrar 
                </Button>

                <Typography>
                  <small> Já possui uma conta? <a href="/">Entrar!</a> </small>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </form>
      </main>
    </>
  )
}

export default Signup