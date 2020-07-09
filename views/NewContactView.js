import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contacts-actions";
import Color from "../constants/Color";

const NewContactView = (props) => {
    const dispatch = useDispatch();
  
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [alerta, setAlerta] = useState("");
  
    const cadastrar = () => {
        if (nome === "") setAlerta("Campo do Nome inválido.");
        else if (telefone.length < 8 || telefone.length > 18 || !(/\+?\d{0,3} *\(?\d{0,3}\)? *\d{3,5}-?\d{3,4}$/.test(telefone))) setAlerta("Campo do Telefone inválido.")
        else {
            dispatch(addContact(nome, telefone));
            props.navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formField}>
                <Text style={styles.label}>Nome:*</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Preencha o nome"
                    onChangeText={(x) => setNome(x)}
                    clearButtonMode='while-editing'
                    textContentType='name'
                />
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Telefone:*</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Preencha o telefone"
                  onChangeText={(x) => setTelefone(x)}
                  clearButtonMode='while-editing'
                  textContentType='telephoneNumber'
                />
            </View>
            <Text style={{ color: 'red', fontSize: 10 }}>{alerta}</Text>
            <View style={styles.cadastroBtn}>
                <Button title="Cadastrar" onPress={cadastrar} />
            </View>
        </View>
    );
};

NewContactView.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Cadastrar Contato'
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    formField: {
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    label: {
        width: 70,
    },
    textInput: {
        width: 200,
        marginLeft: 4,
        padding: 5,
        borderWidth: 2,
        borderColor: '#888',
        borderRadius: 4,
        alignItems: 'center',
    },
    cadastroBtn: {
        width: 150,
        marginTop: 5,
        marginBottom: 10,
    },
});

export default NewContactView;