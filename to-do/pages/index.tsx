import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { 
  Grid,
  Typography,
  TextField, 
  Button 
    } from '@mui/material';
import {login} from '../api/axios';
import styles from '../styles/index.module.scss';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const [error, setError] = useState(false);

  const submitHandler = async (event:any) => {
    event.preventDefault();

    try {
      await login(email, password).then((response:any) => {
        localStorage.setItem("token", response.data);
      });
      router.push("/Lobby");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <>
      <Head>
        <title>To-Do Blue-EdTech / Login </title>
        <meta name="description" content="Página de Login da To-Do Blue-EdTech"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={submitHandler}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <div className={styles.card}>
                <Typography className={styles.card__title}>
                  <h1> To-Do Blue-EdTech </h1>
                </Typography>
                
                <form>
                  <TextField 
                    className={styles.card__input} 
                    label="E-mail" 
                    variant="outlined" 
                    size="small" 
                    onChange={(e) => setEmail(e.target.value)}/>
                </form>

                <form>
                  <TextField 
                    className={styles.card__input} 
                    label="Senha" 
                    variant="outlined" 
                    type="password"
                    size="small" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </form>
                
                <Button 
                  className={styles.card__button} 
                  variant="contained" 
                  size="small" 
                  type="submit"> 
                  Entrar 
                </Button>

                <Typography>
                  <small> Não possui uma conta? <a href="/Signup">Cadastre-se!</a> </small>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </form>
      </main>
    </>
  )
}

export default Login
