import React from 'react';
import '../index.css';

import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
  TextField,
} from '@material-ui/core';

function Painel() {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="" />
            Quantidade
            <InputLabel />
            <TextField
              id="quantidade"
              size="small"
              label=""
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              aria-describedby=""
            />
            <FormHelperText id="quantidade-helper">
              Selecione a quantidade de contratos
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="" />
            Preço
            <InputLabel />
            <TextField
              id="preco"
              size="small"
              label=""
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              aria-describedby=""
            />
            <FormHelperText id="preco-helper">Informe o preço</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} spacing={4}>
          <Button size="large" variant="contained" color="secondary">
            COMPRAR
          </Button>
          <Button size="large" variant="contained" color="primary">
            VENDER
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <Button size="large" variant="contained">
            ZERAR
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="" />
            Total
            <InputLabel />
            <TextField
              id="preco"
              size="small"
              label=""
              type=""
              InputLabelProps={{
                'aria-readonly': true,
              }}
              variant="filled"
              aria-describedby=""
            />
            <FormHelperText id="preco-helper">Informe o preço</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Painel;
