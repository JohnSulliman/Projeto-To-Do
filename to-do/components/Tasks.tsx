import React from 'react';
import { Grid } from '@mui/material';
import { 
    DataGrid, 
    GridColDef, 
    GridOverlay
        } from '@mui/x-data-grid';
// import styles from '../styles/createTasks.module.scss';


const columns: GridColDef[] = [
    { 
        field: 'nome',
        headerName: 'Nome', 
        width: 115
    },
    {
        field: 'data de registro',
        headerName: 'Data de Registro',
        width: 185,
        editable: true,
    },
    {
        field: 'status da atividade',
        headerName: 'Status da Atividade',
        type: 'number',
        width: 200,
        editable: true,
    },
    {
        field: 'data de previsão',
        headerName: 'Data de Previsão',
        type: 'number',
        width: 190,
        editable: true,
    },
    {
        field: 'data de conclusão',
        headerName: 'Data de Conclusão',
        type: 'number',
        width: 200,
        editable: true,
    },
    {
        field: 'ação',
        headerName: 'Ação',
        type: 'number',
        width: 110,
        editable: true,
    },
];
  
const rows = [
    
];

const CustomNoRowsOverlay = () => {
    return <GridOverlay>Sem Tarefas.</GridOverlay>;
};

function Tasks() {
    return (
        <Grid style={{ height: '85%', width: '85%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                components={{
                    NoRowsOverlay: CustomNoRowsOverlay,
                  }}
            />
        </Grid>
    );
}

export default Tasks