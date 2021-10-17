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

  const router = useRouter();

  const [error, setError] = useState(false);

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
              <div className={styles.Card}>
                <Typography className={styles.Card__Tittle}>
                  <h1> Cadastro </h1>
                </Typography>
                
                <TextField 
                  className={styles.Card__Input} 
                  label="Nome de usuário" 
                  variant="outlined" 
                  size="small" 
                  onChange={(e) => setUserName(e.target.value)}/>

                <TextField 
                  className={styles.Card__Input} 
                  label="E-mail" 
                  variant="outlined" 
                  size="small" 
                  onChange={(e) => setEmail(e.target.value)}/>

                <TextField 
                  className={styles.Card__Input} 
                  label="Senha" 
                  variant="outlined" 
                  type="password"
                  size="small" 
                  onChange={(e) => setPassword(e.target.value)}/>

                <TextField 
                  className={styles.Card__Input} 
                  label="Confirmar Senha" 
                  variant="outlined" 
                  type="password"
                  size="small" 
                  onChange={(e) => setVerificPassword(e.target.value)}/>

                  {
                    password === verificPassword ? "" 
                      : 
                    <>
                      <small>*Senha errada! Verifique sua senha</small>
                      <small>A senha deve conter:</small>
                      <small>Um símbolo;</small>
                      <small>Uma letra maiúscula;</small>
                      <small>Um número;</small>
                    </>
                  }

                <Button 
                  className={styles.Card__Button} 
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