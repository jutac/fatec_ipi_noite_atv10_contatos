import { ADD_CONTACT, DELETE_CONTACT } from "./contacts-actions";

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            const c = { id: new Date().toString(), nome: action.data.nome, telefone: action.data.telefone };
            return {
                contatos: estado.contatos.concat(c)
            }
        case DELETE_CONTACT:
            return {
                contatos: estado.contatos.filter(c => c.id !== action.data.id)
            }
        default:
            return estado;
    }
}