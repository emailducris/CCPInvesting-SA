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
</FormControl>;

<TextField
  id="filled-read-only-input"
  label="Read Only"
  defaultValue="Hello World"
  InputProps={{
    readOnly: true,
  }}
  variant="filled"
/>;
