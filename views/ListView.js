import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, TextInput } from 'react-native';
import ItemGrid from '../components/ItemGrid';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../store/contacts-actions';

const ListView = (props) => {
  const dispatch = useDispatch();
  const contatos = useSelector(state => state.contatos.contatos);
  const [busca, setBusca] = useState("");

  const removerContato = (keyASerRemovida) => {
    dispatch(deleteContact(keyASerRemovida));
  }

  return (<View style={styles.container}>
    <TextInput
      style={styles.textInput}
      placeholder="Buscar"
      onChangeText={(x) => setBusca(x)}
    />
    <View style={styles.gridHeader}>
      <Text style={styles.gridColumnNome}>NOME</Text>
      <Text style={styles.gridColumnTelefone}>TELEFONE</Text>
    </View>
    <FlatList
      data={contatos.filter(c => c.nome.includes(busca) || c.telefone.includes(busca))}
      keyExtractor={c => c.id}
      renderItem={(x) => (
        <ItemGrid
          item={x.item}
          onDelete={removerContato}
          nomeStyle={styles.gridColumnNome}
          telefoneStyle={styles.gridColumnTelefone}
        />
      )}
    />
  </View>)
}

ListView.navigationOptions = dadosNav => {
  return {
    headerTitle: 'Lista de Contatos',
    headerRight: () => {
      return (<HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
        <Item title="Adicionar" 
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'} 
            onPress={() => {dadosNav.navigation.navigate('NewContact')}}
        /> 
      </HeaderButtons>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 3,
    alignItems: 'center',
  },
  gridHeader: {
    flexDirection: 'row',
    padding: 4,
    borderBottomWidth: 3,
    borderBottomColor: '#666',
  },
  gridColumnNome: {
    width: 150,
    padding: 2,
    alignItems: 'flex-end'
  },
  gridColumnTelefone: {
    width: 150,
    padding: 2,
    alignItems: 'flex-end'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
  }
});

export default ListView;