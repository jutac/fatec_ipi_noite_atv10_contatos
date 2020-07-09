export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (nome, telefone) => {
    return {
        type: ADD_CONTACT,
        data: { nome: nome, telefone: telefone }
    }
}

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        data: { id: id }
    }
}
