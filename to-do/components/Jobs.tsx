import { Button, Grid } from '@mui/material';
import React from 'react';
import styles from '../styles/createJob.module.scss';
import { TextField } from '@mui/material';

interface Prop {
    name: string;
}

function Jobs(props: Prop) {
    return (
        <Grid className={styles.window}>
            <Button 
                variant="contained"
                size="small" 
            >
                `{props.name}`
            </Button>    
        </Grid>
    )
}


export default Jobs