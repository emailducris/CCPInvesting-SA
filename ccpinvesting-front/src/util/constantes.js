export const ACAO_INICIAL = {
    nome: '',
    descricao: '',
    horaAtualizacao: "00:00:00",
    preco: 0.0
};

export const INVESTIDOR_INICIAL = {

    celular: "",
    cpf: "",
    email: "",
    bairro: "",
    cidade: "",
    estado: "",
    numero: 0,
    pais: "",
    rua: "",
    nascimento: "",
    nome: "",
    sobrenome: "",
    usuario: {
        login: "",
        senha: ""
    }
};

export const LOGIN_INICIAL = {
    login: "",
    senha: ""
  }

export const COMPRA_INICIAL = {
    acaoId: 0,
    investidorId: 0,
    quantidade: 0
}

export const VENDA_INICIAL = {
    investimentoId: 0,
    investidorId: 0,
}

export const DEPOSITO_INICIAL = {
    idInvestidor: 0,
    valor: 0
}
